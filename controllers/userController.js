const {check, validationResult, body} = require('express-validator');
const bycrypt = require('bcrypt');

const fs = require('fs');
const path = require('path')
const usersFilePath = path.join(__dirname,'../data/users_GreenHome.json');
const usersList = JSON.parse(fs.readFileSync(usersFilePath, {encoding:'utf-8'}));

const writeData = function(data,filePath){
    let stringUsers = JSON.stringify(data, null," ");
    fs.writeFileSync(filePath, stringUsers)
};
const newID = function(){
    let lastID = (usersList[usersList.length-1].id)
    return ++lastID
;}


const userController = {
    register: function (req,res,next){
        res.render('users/register')
    },
    processRegister: function(req,res,next){
        let errors = validationResult(req);
          
        if (!errors.isEmpty()){
            return res.render('users/register', {errors:errors.errors})
        } else {
            let newUser ={
                id: newID(),
                email:req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                category: "guest",
                password:bycrypt.hashSync(req.body.password, 10),
                avatar:'default-image.png'
            }
            if (req.files[0]){
                newUser.avatar=req.files[0].filename; 
            }
            let usersToSave = [...usersList, newUser];
            writeData(usersToSave, usersFilePath);
            return res.redirect('/')};
    },

    login: function (req,res,next){
        res.render('users/login')
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render('users/login', {errors:errors.errors})
        }else{
            let userFound = usersList.find(function(user){return user.email == req.body.email})
            req.session.userLogged = userFound.email;
            if (req.body.remember!=undefined){
            res.cookie('userEmail',userFound.email,{maxAge:1000*60*60});
            };
            return res.redirect('/users/profile')
        }
    },

    profile:(req,res,next)=>{     
        const user = usersList.find((user)=>{
            return user.email == req.session.userLogged;
        });
        
        res.render('users/profile',{
            name: user.first_name,
            email: user.email,
            avatar: user.avatar
        });
    },

    logout:(req,res)=>{
        req.session.destroy();
        res.cookie('userEmail',null,{maxAge:-1});
        res.redirect('/')
    }
}

module.exports = userController;