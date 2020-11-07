const { Router } = require('express');
const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController')

router.get('/', productController.article);

router.get('/create', productController.create);

module.exports = router;

