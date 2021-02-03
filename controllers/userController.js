const {check, validationResult, body} = require('express-validator');
const bycrypt = require('bcrypt');
const fs = require('fs');
const path = require('path')
const db = require('../database/models/index.js');



const userController = {

    //Register
    register: (req,res,next)=>{
        res.render('users/register')
    },
    processRegister: async(req,res,next)=>{
        let errors = validationResult(req);
          
        if (!errors.isEmpty()){
            return res.render('users/register', {errors:errors.errors})
        } else {
            await db.User.create({
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: bycrypt.hashSync(req.body.password, 10),
                avatar: req.files[0].filename
            });
            return res.redirect('/')};
    },
    
    //Login
    login: (req,res,next)=>{
        res.render('users/login')
    },
    processLogin: async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            console.log(errors)
            return res.render('users/login', {errors:errors.errors})
        }else{
            let userFound = await db.User.findOne({where:{email:req.body.email}});
            let compare = bycrypt.compareSync(req.body.password, userFound.password);
            if(!compare){
                newError = [
                    {
                    msg: "Credenciales inválidas",
                    param: 'password',
                    location: 'body'
                    }
                ]
                return res.render('users/login', {errors:newError})
            }
            else {
                req.session.userLogged = userFound.email;
                if (req.body.remember!=undefined){
                    res.cookie('userEmail',userFound.email,{maxAge:1000*60*60});
                    };
           return res.redirect('/users/profile')
            }
            
        }
    },
    
    //Read
    profile: async (req,res,next)=>{     
        
        let user = await db.User.findOne({where:{email:req.session.userLogged}})
        
        res.render('users/profile',{
            name: user.first_name,
            email: user.email,
            avatar: user.avatar
        });
    },
    //Edit
    edit: async (req,res,next)=>{
        let user = await db.User.findOne({where:{email:req.session.userLogged}});
        return res.render('users/edit',{user:user});
    },
    processEdit: async(req,res,next)=>{
        let errors = validationResult(req);
          
        if (!errors.isEmpty()){
            let user = await db.User.findOne({where:{email:req.session.userLogged}});
            return res.render('users/edit', {errors:errors.errors, user:user})
        } else {
            await db.User.update({  
                password: bycrypt.hashSync(req.body.password, 10),
            },{where:{email:req.session.userLogged}});
            if (typeof req.files[0] !== 'undefined'){
                await db.User.update({
                avatar: req.files[0].filename},
                {where:{email:req.session.userLogged}}
                )
            }
        }
            return res.redirect("/users/profile")
    },

    //Logout
    logout:(req,res)=>{
        req.session.destroy();
        res.cookie('userEmail',null,{maxAge:-1});
        res.redirect('/')
    }
}

module.exports = userController;