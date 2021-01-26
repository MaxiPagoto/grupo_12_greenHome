const {check, validationResult, body} = require('express-validator');
const bycrypt = require('bcrypt');
const fs = require('fs');
const path = require('path')
const db = require('../database/models/index.js')
const { Op } = require("sequelize")

const inspireController = {
    inspire: (req,res,next)=> {        
        return res.render('inspire/index')
    },
    create: async (req,res,next)=>{
        const products = await db.Product.findAll();
        return res.render('inspire/create',{products})
    },
    processCreate: async (req,res,next)=>{
        const user = await db.User.findOne({where:{email:req.session.userLogged}})
        console.log(req.body)
        await db.Post.create({
            user_id: user.id,
            product_id: req.body.product,
            image: req.files[0].filename,
            text:req.body.text
        }); 
        return res.send('Post creado')
    }
    }

module.exports = inspireController;