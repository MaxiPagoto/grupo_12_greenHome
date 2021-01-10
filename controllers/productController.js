const {check, validationResult, body} = require('express-validator');
const { EDESTADDRREQ } = require('constants');
const { render } = require('ejs');
const fs = require('fs');
const path = require('path');
const { send } = require('process');
const db = require('../database/models/index.js')
const { Op } = require("sequelize")

const productsFilePath = path.join(__dirname, '../data/products-GreenHome.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
function getAllProducts(){
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));}

    function GenerarNuevoID(){
      const products = getAllProducts();
      return products.pop().id +1;
      
      }

const productController = {
      shop: async function (req,res,next){
      const productList = await db.Product.findAll({
        include: ['category', 'rooms', 'benefits']
      });
      const categories = await db.Category.findAll()
      const rooms = await db.Room.findAll()
      const benefits = await db.Benefit.findAll()

       return res.render('products/list',{products:productList, rooms:rooms, benefits:benefits, categories:categories})
      },
      adminShop: async function (req,res,next){
        const productList = await db.Product.findAll({
          include: ['category', 'rooms', 'benefits']
        });
        const categories = await db.Category.findAll()
      const rooms = await db.Room.findAll()
      const benefits = await db.Benefit.findAll()
        return res.render('products/admin-list',{products:productList, rooms:rooms, benefits:benefits, categories:categories})
      } ,
      search: async function (req,res,next){
        let query = req.query.search_query;
        const productList = await db.Product.findAll({
          where: {name : {[Op.like]: '%'+query+'%'}}
        },{
          include: ['category', 'rooms', 'benefits']
        });
        return res.render('products/list',{products:productList})
      }
      ,
      filter: async function (req,res,next){
        const productList = await db.Product.findAll({
          include: ['category', 'rooms', 'benefits']
        },
        {where: {
            [Op.and]: [
              { category_id: req.query.category_id},
              { rooms: {where: {id:req.query.filter_room}}},
              { filter_dificult: req.query.filter_dificult}
            ]
          }
        });
      const categories = await db.Category.findAll()
      const rooms = await db.Room.findAll()
      const benefits = await db.Benefit.findAll()
      return res.render('products/list',{products:productList, rooms:rooms, benefits:benefits, categories:categories})
      },

      article: async function (req,res,next){
        const productoSQL = await db.Product.findByPk(req.params.id,{
          include: ['category', 'rooms', 'benefits']})
        return res.render('products/detail',{product: productoSQL})
      },

      // Creacion de producto

      create: async function(req,res, next){
        const categories = await db.Category.findAll()
        const rooms = await db.Room.findAll()
        const benefits = await db.Benefit.findAll()
        res.render('products/create', {categories:categories,rooms:rooms,benefits:benefits})
      },

      store: async function(req,res,next){
        const categories = await db.Category.findAll()
        const rooms = await db.Room.findAll()
        const benefits = await db.Benefit.findAll()
        let errors = validationResult(req);
        if (!errors.isEmpty()){
          return res.render('products/create', {errors:errors.errors,categories:categories,rooms:rooms,benefits:benefits})
        }else{
        const rooms = req.body.filter_room;
        const benefits = req.body.filter_benefit;
        await db.Product.create({
          name:req.body.name,
          image: req.files[0].filename,
          price: req.body.price,
          discount: req.body.discount,
          line: req.body.line,
          description: req.body.description,
          copy: req.body.copy,
          prop_light: req.body.prop_light,
          prop_water: req.body.prop_water,
          category_id: req.body.prop_category,
          prop_plantpot: req.body.prop_plantpot,
          prop_plague: req.body.prop_plague,
          prop_height: req.body.prop_height,
          prop_pet: req.body.prop_pet,
          filter_dificult: req.body.filter_dificult
        });

        let Products = await db.Product.findAll();

        newProductID = Products[Products.length-1].id;

        for (room of rooms) {
          await db.Product_room.create({
            product_id: newProductID,
            room_id:room
          })
        };

        for (benefit of benefits) {
          await db.Product_benefit.create({
            product_id: newProductID,
            benefit_id: benefit
          })
        }
        res.redirect('/');  
      }},
      
      //Agregar a Carrito de compra

      cart: function (req,res,next){
        res.render('cart')
      },

      // Editar Producto

      edit:async function(req,res,next){  
        const categories = await db.Category.findAll()
        const rooms = await db.Room.findAll()
        const benefits = await db.Benefit.findAll()
        const productoSQL = await db.Product.findByPk(req.params.id,{
          include: ['category', 'rooms', 'benefits']})
      return res.render('products/edit',{product:productoSQL ,categories:categories,rooms:rooms,benefits:benefits});
      }, 
        
      save: async function(req,res,next){
        const categories = await db.Category.findAll()
        const rooms = await db.Room.findAll()
        const benefits = await db.Benefit.findAll()
        const productoSQL = await db.Product.findByPk(req.params.id,{
          include: ['category', 'rooms', 'benefits']})
        let errors = validationResult(req);
        if (!errors.isEmpty()){
          return res.render('products/edit', {errors:errors.errors,product:productoSQL,categories:categories,rooms:rooms,benefits:benefits})
        }else{

        const rooms = req.body.filter_room;
        const benefits = req.body.filter_benefit;

         await db.Product.update({
         name:req.body.name,
         price: req.body.price,
         discount: req.body.discount,
         line: req.body.line,
         description: req.body.description,
         copy: req.body.copy,
         prop_light: req.body.prop_light,
         prop_water: req.body.prop_water,
         category_id: req.body.prop_category,
         prop_plantpot: req.body.prop_plantpot,
         prop_plague: req.body.prop_plague,
         prop_height: req.body.prop_height,
         prop_pet: req.body.prop_pet,
         filter_dificult: req.body.filter_dificult
        },{
        where:{
           id: req.params.id
          }
       })
      await db.Product_room.destroy(
        {
          where:{
            product_id:req.params.id
          }
        }
      );
      for (room of rooms) {
        
      await db.Product_room.create({
          product_id:req.params.id,
          room_id:room
        })
      };
      await db.Product_benefit.destroy(
        {
          where:{
            product_id:req.params.id
          }
        }
      );
      for (benefit of benefits) {
        
        await db.Product_benefit.create({
          product_id:req.params.id,
          benefit_id:benefit
        })
      };

      if (typeof req.files[0] !== 'undefined'){
        await db.Product.update({
        image: req.files[0].filename},
        {where:{id:req.params.id}}
        )
      }
    } 

     res.redirect('/')
      },


  //Eliminar producto

    delete: async (req, res,next) => {
          await db.Product_benefit.destroy(
          {
            where:{
              product_id:req.params.id
            }
          });
        await db.Product_room.destroy(
            {
              where:{
                product_id:req.params.id
              }
            });
          await db.Product.destroy(
            {
              where:{
                id:req.params.id
              }
            });
      res.redirect('/products/admin');
    }
}
module.exports = productController;


