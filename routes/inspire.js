var express = require('express');
var router = express.Router();
const inspireController = require('../controllers/inspireController')
const {check, validationResult, body} = require('express-validator'); 
const multer = require('multer');
const fs = require('fs');
const path = require('path')
const postFilePath = path.join(__dirname,'../public/images/inspire/post');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, postFilePath)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "_" + path.basename(file.originalname, path.extname(file.originalname)) +'_' + Date.now() + path.extname(file.originalname))
    }
  })
  
const upload = multer({storage: storage})

const authMiddleware = require('../middlewares/authMiddleware')

/* GET users listing. */
router.get('/', inspireController.inspire);
router.get('/create',authMiddleware.profile, inspireController.create);
router.post('/create', upload.any() ,inspireController.processCreate);


module.exports = router;
