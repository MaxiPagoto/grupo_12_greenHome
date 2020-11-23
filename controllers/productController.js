const { render } = require('ejs');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products-GreenHome.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
function getAllProducts(){
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));}

const productController = {
      shop: function (req,res,next){
        res.render('products/list',{products:products})
      },
      adminShop: function (req,res,next){
        res.render('products/admin-list',{products:products})
      } ,

      article: function (req,res,next){
        const productId = req.params.id;
        let productDetail = products.find(function(product){
          return product.id == productId;
        });
        return res.render('products/detail',{product: productDetail})
      },
      create: function(req,res, next){
        res.render('products/create')
      },
      store: function(req,res,next){
        res.send('Store');
      },
      cart: function (req,res,next){
        res.render('cart')
      },
      edit:function(req,res,next){
        res.render('products/edit');},  
      save: function(req,res,next){
        res.redirect('/products/detail/:id');},

        tienda:function(req,res,next){
          res.render('products/list');}
        
}
module.exports = productController;