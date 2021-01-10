const { render } = require('ejs');
const fs = require('fs');
const path = require('path');
const db = require('../database/models/index.js')

const productsFilePath = path.join(__dirname, '../data/products-GreenHome.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
function getAllProducts(){
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));}
    
const ultimoID = {new: function(){return products[products.length-1].id + 1}}

const indexController = {
    index: async function (req,res,next){
        const productList = await db.Product.findAll({limit:4},{
            include: ['category', 'rooms', 'benefits']
          });
          
        res.render('index', {products:productList})
      },
    inspire: function (req,res,next){
        res.render('inspire')
    }
}

module.exports = indexController;