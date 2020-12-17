const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const path = require('path')
const usersFilePath = path.join(__dirname,'../data/users_GreenHome.json');
const usersList = JSON.parse(fs.readFileSync(usersFilePath, {encoding:'utf-8'}));
const bycrypt = require('bcrypt');

const usersValidator= {
    register: [
        body('email')
        .notEmpty().withMessage('Email vacío')
        .bail()
        .isEmail().withMessage('El email debe ser una dirección válida')
        .bail()
        .custom(
            function(value, {req}){
                let emailForm = value;
                let userFound = usersList.find(function(user){return user.email == value});
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
            if (req.files[0]){return true} else {return false}
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
            function(value, {req}){
                let userFound = usersList.find(function(user){return user.email==value});
                return (userFound)
            }
        )
        .withMessage('El usuario no existe')
        .bail(),
        body('password')
        .isLength({min:8}).withMessage('La contraseña debe tener 8 caracteres.')
        .bail()
        .custom(
            function(value,{req}){
                let userFound = usersList.find(function(user){return user.email==req.body.email});
                let passwordCheck = bycrypt.compareSync(req.body.password, userFound.password);
                return (passwordCheck)
            }
        )
        .withMessage('Contraseña incorrecta')
    ]
}

module.exports = (usersValidator)