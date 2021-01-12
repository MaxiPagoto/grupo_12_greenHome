const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const path = require('path')
const bycrypt = require('bcrypt');

const productValidator= {
    create: [
        body('name')
        .notEmpty().withMessage('Nombre de producto obligatorio')
        .bail(),
        body('price')
        .notEmpty().withMessage('El precio es obligatorio')
        .bail(),
        body('discount')
        .custom((value)=>{
            return (value <100 && value >=0)
        }).withMessage('El descuento debe ser mayor a 0 y menor a 100')
        .bail(),
        body('line')
        .notEmpty().withMessage('Line obligatorio')
        .bail(),
        body('copy')
        .notEmpty().withMessage('Copywritting obligatorio')
        .bail(),
        body('description')
        .notEmpty().withMessage('Description obligatorio')
        .bail(),
        body('prop_height')
        .notEmpty().withMessage('Altura obligatoria')
        .bail(),
        body('image')
        .custom(function(value,{req}){
            return req.files[0];
        }).withMessage('La imagen de producto es obligatoria')
        .bail()
        .custom(function(value,{req}){
            let validExt = ['.png', '.jpg', '.jpeg']
            let fileExt = path.extname(req.files[0].originalname)
            let foundExt = validExt.find(function(ext){return ext==fileExt})
            return (foundExt)
        }).withMessage('Los formatos admitidos son .jpg, .jpeg o .png'),
        body('filter-benefit')
        .custom((value,{req})=>{
            return (typeof req.body.filter_benefit !== "undefined")
        }).withMessage('Debes elegir al menos un beneficio.')
        .bail(),
        body('filter-room')
        .custom((value,{req})=>{
            return (typeof req.body.filter_room !== "undefined")
        }).withMessage('Debes elegir al menos un ambiente.')
    ],
    edit: [
        body('image')
        .custom(function(value,{req}){
            if(req.files[0] != undefined){
            let validExt = ['.png', '.jpg', '.jpeg']
            let fileExt = path.extname(req.files[0].originalname)
            let foundExt = validExt.find(function(ext){return ext==fileExt})
            return (foundExt)} else {
                return true
            }
        }).withMessage('Los formatos admitidos son .jpg, .jpeg o .png'),
        body('name')
        .notEmpty().withMessage('Nombre de producto obligatorio')
        .bail(),
        body('price')
        .notEmpty().withMessage('El precio es obligatorio')
        .bail(),
        body('discount')
        .custom((value)=>{
            return (value <100 && value >=0)
        }).withMessage('El descuento debe ser mayor a 0 y menor a 100')
        .bail(),
        body('line')
        .notEmpty().withMessage('Line obligatorio')
        .bail(),
        body('copy')
        .notEmpty().withMessage('Copywritting obligatorio')
        .bail(),
        body('description')
        .notEmpty().withMessage('Description obligatorio')
        .bail(),
        body('prop_height')
        .notEmpty().withMessage('Altura obligatoria')
        .bail(),
        body('filter-benefit')
        .custom((value,{req})=>{
            return (typeof req.body.filter_benefit !== "undefined")
        }).withMessage('Debes elegir al menos un beneficio.')
        .bail(),
        body('filter-room')
        .custom((value,{req})=>{
            return (typeof req.body.filter_room !== "undefined")
        }).withMessage('Debes elegir al menos un ambiente.')
    ]
}

module.exports = (productValidator)