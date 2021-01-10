const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const path = require('path')
const usersFilePath = path.join(__dirname,'../data/users_GreenHome.json');
const usersList = JSON.parse(fs.readFileSync(usersFilePath, {encoding:'utf-8'}));
const bycrypt = require('bcrypt');

const authMiddleware = {
    create: function(req,res,next){
        if(req.session.userLogged){
            return (next());
        }res.redirect('/users/login');
    },

    shop: function(req,res,next){
        if(req.session.userLogged ){
            return (next());
        }res.redirect('/products');

    },

    profile: function(req,res,next){
        if(req.session.userLogged){
            return (next());
        }res.redirect('/users/login');

    },
    edit: function(req,res,next){
        if(req.session.userLogged){
            return (next());
        }res.redirect('/users/login');

    },
    login:function(req,res,next){
        if(!req.session.userLogged){
            return (next());
        }res.redirect('/');
    }



}






module.exports = authMiddleware;