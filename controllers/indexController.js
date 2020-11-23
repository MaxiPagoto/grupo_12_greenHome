const { render } = require('ejs');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products-GreenHome.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
function getAllProducts(){
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));}
    
const ultimoID = {new: function(){return products[products.length-1].id + 1}}

const indexController = {
    index: function (req,res,next){
        //Guardar en una variable 4 productos
        let homeList = products.filter(product=>product.id<5)
        res.render('index', {products:homeList})
      },
    inspire: function (req,res,next){
        res.render('inspire')
    }
}

module.exports = indexController;