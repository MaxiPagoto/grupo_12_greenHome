const { EDESTADDRREQ } = require('constants');
const { render } = require('ejs');
const fs = require('fs');
const path = require('path');
const db = require('../database/models/index.js')

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
       const modeloPrueba = await db.Product.findAll({
        include: ['category', 'rooms', 'benefits']
      })
       console.log(modeloPrueba[0].rooms)
       return res.send(modeloPrueba[0].benefits[0].name)
        //return res.render('products/list',{products:products})
      },
      adminShop: function (req,res,next){
        return res.render('products/admin-list',{products:products})
      } ,

      article: function (req,res,next){
        const productId = req.params.id;
        let productDetail = products.find(function(product){
          return product.id == productId;
        });
        return res.render('products/detail',{product: productDetail})
      },

      // Creacion de producto

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

        fs.writeFileSync(productsFilePath, productsToStringify)
        res.redirect('/products');  
      },
      
      //Agregar a Carrito de compra

      cart: function (req,res,next){
        res.render('cart')
      },

      // Editar Producto

      edit:function(req,res,next){

        const product = getAllProducts();
        const id = req.params.id;
        const result  = products.find((product)=> product.id == id);

        

        res.render('products/edit',{productToEdit: result});
      },  
           
      save: function(req,res,next){
      const productsToStore =  [...products];
      const id = req.params.id;

        const edition = productsToStore.map((product) =>{
          
          if(id == product.id){
            product.name = req.body.name,
            product.image = req.files[0] ? req.files[0].filename : product.image, 
            product.price = req.body.price,
            product.discount = req.body.discount,
            product.line =  req.body.line,
            product.description =  req.body.description,
            product.copy =  req.body.copy,
            product.prop_light =  req.body.prop_light,
            product.prop_water =  req.body.prop_water,
            product.prop_category = req.body.prop_category,
            product.prop_plantpot = req.body.prop_plantpot,
            product.prop_plague = req.body.prop_plague,
            product.prop_height = req.body.prop_height,
            product.prop_pet = req.body.prop_pet,
            product.filter_benefit = req.body.filter_benefit,
            product.filter_dificult = req.body.filter_dificult,
            product.filter_room = req.body.filter_room
          }    
          return product 
        }   
        );    
        const newAllProductsToStringify = JSON.stringify(edition, null, ' ');

        
        fs.writeFileSync('./data/products-GreenHome.json', newAllProductsToStringify)
        res.redirect('/products/detail/'+id);
      },


          //Eliminar producto

          delete: (req, res,next) => {
            const AllProducts = getAllProducts();
            let productsList = AllProducts.filter(product=>product.id != req.params.id);
            productListString = JSON.stringify(productsList,null,1);
            fs.writeFileSync(productsFilePath, productListString)
            res.redirect('/products');
          }
        
}
module.exports = productController;


