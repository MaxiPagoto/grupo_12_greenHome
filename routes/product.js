const { Router } = require('express');
const express = require('express');
var multer  = require('multer')
const router = express.Router();
const productController = require ('../controllers/productController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/images/products/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
    })
    const upload = multer({ storage: storage })


//Ruta hacia la tienda
router.get('/', productController.shop);
router.get('/admin', productController.adminShop)

//Ruta hacia detalle de product
router.get('/detail/:id', productController.article);

//Ruta hacia Crear y guardar nuevo producto
router.get('/create', productController.create);
router.post('/create', upload.any(), productController.store);

//Ruta hacia Modificar y guardar producto existente
router.get('/edit/:id', productController.edit)
router.post('/edit/:id',upload.any(), productController.save)

//Ruta hacia carrito de compras
router.get('/cart', productController.cart);

//Ruta de eliminacion de producto

router.post('/delete/:id', productController.delete)

//Ruta hacia tienda --- Maxi
router.get('/list', productController.tienda);

module.exports = router;

