const { Router } = require('express');
const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController')


//Ruta hacia la tienda
router.get('/', productController.shop);

//Ruta hacia detalle de product
router.get('/detail/:id?', productController.article);

//Ruta hacia Crear y guardar nuevo producto
router.get('/create', productController.create);
router.post('/create', productController.store);

//Ruta hacia Modificar y guardar producto existente
router.get('/edit/:id?', productController.edit)
router.post('/edit', productController.save)

//Ruta hacia carrito de compras
router.get('/cart', productController.cart);

module.exports = router;

