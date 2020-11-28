const { EDESTADDRREQ } = require('constants');
const { render } = require('ejs');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products-GreenHome.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
function getAllProducts(){
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));}

    function GenerarNuevoID(){
      const products = getAllProducts();
      return products.pop().id +1;
      
      }

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

        
        const newProduct = {
          id: GenerarNuevoID(),
          name: req.body.name,
          image: req.files[0].filename,
          price: req.body.price,
          discount: req.body.discount,
          line: req.body.line,
          description: req.body.description,
          copy: req.body.copy,
          prop_light: req.body.prop_light,
          prop_water: req.body.prop_water,
          prop_category: req.body.prop_category,
          prop_plantpot: req.body.prop_plantpot,
          prop_plague: req.body.prop_plague,
          prop_height: req.body.prop_height,
          prop_pet: req.body.prop_pet,
          filter_benefit: req.body.filter_benefit,
          filter_dificult: req.body.filter_dificult,
          filter_room: req.body.filter_room
        }

        const AllProducts = getAllProducts();
        AllProducts.push(newProduct);

        const productsToStringify = JSON.stringify(AllProducts, null, ' ');

        fs.writeFileSync('./data/products-GreenHome.json', productsToStringify)


        
        res.redirect('/products');
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