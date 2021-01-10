const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const path = require('path')
const usersFilePath = path.join(__dirname,'../data/users_GreenHome.json');
const usersList = JSON.parse(fs.readFileSync(usersFilePath, {encoding:'utf-8'}));
const bycrypt = require('bcrypt');
const db = require('../database/models/index.js');

const usersValidator= {
    register: [
        body('email')
        .notEmpty().withMessage('Email vacío')
        .bail()
        .isEmail().withMessage('El email debe ser una dirección válida')
        .bail()
        .custom(
            async function(value, {req}){
                let userFound = await db.User.findOne({where:{email:value}});
                return (!userFound)
            }
        )
        .withMessage('El email ya está registrado'),

        body('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
        .bail(),

        body('retype').custom(function(value, {req}){
            return (value == req.body.password)
            })
        .withMessage('Las contraseñas no coinciden.'),

        body('avatar')
        .custom(function(value,{req}){
            return req.files[0];
        }).withMessage('El avatar es obligatorio')
        .bail()
        .custom(function(value,{req}){
            let validExt = ['.png', '.jpg', '.jpeg']
            let fileExt = path.extname(req.files[0].originalname)
            let foundExt = validExt.find(function(ext){return ext==fileExt})
            return (foundExt)
        }).withMessage('Los formatos admitidos son .jpg, .jpeg o .png')
    ],
    login: [
        body('email')
        .notEmpty()
        .withMessage('Email vacío')
        .bail()
        .custom(
            async function(value, {req}){
                let userFound = await db.User.findOne({where:{email:req.body.email}});
                return (userFound)
            }
        )
        .withMessage('El usuario no existe')
        .bail(),
        body('password')
        .isLength({min:8}).withMessage('La contraseña debe tener 8 caracteres.')
        .bail()
        .custom(
            async function(value,{req}){
                let userFound = await db.User.findOne({where:{email:req.body.email}});
                let passwordCheck = bycrypt.compareSync(req.body.password, userFound.password);
                return (passwordCheck)
            }
        )
        .withMessage('Contraseña incorrecta')
    ],
    edit: [
        body('email')
        .custom(
            function(value, {req}){
                return (!(req.body.email == req.session.userLogged))
            }
        )
        .withMessage('No puede modificar su email.'),

        body('first_name')
        .custom(
            async function(value, {req}){
                let user = await db.User.findOne({where:{email:req.session.userLogged}});
                return (user.first_name == value)})
        .withMessage('No puede modificar su nombre')
        .bail(),
        body('last_name')
        .custom(
            async function(value, {req}){
                let user = await db.User.findOne({where:{email:req.session.userLogged}});
                return (user.last_name == value)})
        .withMessage('No puede modificar su apellido')
        ,

        body('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
        .bail(),

        body('retype').custom(function(value, {req}){
            return (value == req.body.password)
            })
        .withMessage('Las contraseñas no coinciden.'),
        body('avatar')
        .custom(function(value,{req}){
            if(value==undefined){
                return !value
            }
            else{
            let validExt = ['.png', '.jpg', '.jpeg']
            let fileExt = path.extname(req.files[0].originalname)
            let foundExt = validExt.find(function(ext){return ext==fileExt})
            return (foundExt)}
        }).withMessage('Los formatos admitidos son .jpg, .jpeg o .png')
    ],
}

module.exports = (usersValidator)