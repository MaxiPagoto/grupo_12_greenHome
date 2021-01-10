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
       //console.log(modeloPrueba[0].rooms)
       return res.render('products/list',{product:modeloPrueba})
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

      create: async function(req,res, next){
        const categories = await db.Category.findAll()
        const rooms = await db.Room.findAll()
        const benefits = await db.Benefit.findAll()
        res.render('products/create', {categories:categories,rooms:rooms,benefits:benefits})
      },

      store: async function(req,res,next){
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
/*
       console.log(req.body.filter_room) 
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

        fs.writeFileSync(productsFilePath, productsToStringify)*/
        res.redirect('/');  
      },
      
      //Agregar a Carrito de compra

      cart: function (req,res,next){
        res.render('cart')
      },

      // Editar Producto

      edit:async function(req,res,next){

        const product = getAllProducts();
        const id = req.params.id;
        const result  = products.find((product)=> product.id == id);
        
        const categories = await db.Category.findAll()
        const rooms = await db.Room.findAll()
        const benefits = await db.Benefit.findAll()
        const productoSQL = await db.Product.findAll({
          include: ['category', 'rooms', 'benefits']
        })

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

       res.render('products/edit',{productToEdit: result,categories:categories,rooms:rooms,benefits:benefits,busqueda:busqueda});
      },  
           
      save:  function(req,res,next){
   /* const productsToStore =  [...products];
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
        res.redirect('/products/detail/'+id); */
        const categories = await db.Category.findAll()
        const rooms = await db.Room.findAll()
        const benefits = await db.Benefit.findAll()
        const productoSQL = await db.Product.findAll({
          include: ['category', 'rooms', 'benefits']
        })

         db.product.update({
         name:req.body.name,
         image: req.files[0] ? req.files[0].filename : product.image,
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

       for (room of rooms) {
        await db.Product_room.update({
          room_id:room
        },{
          where:{
            product_id:req.params.id
          }
        })
      };

      for (benefit of benefits) {
        await db.Product_benefit.update({
          product_id: newProductID,
          benefit_id: benefit
        })
      }

     res.redirect('/')
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


