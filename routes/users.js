var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const {check, validationResult, body} = require('express-validator'); 
const multer = require('multer');
const fs = require('fs');
const path = require('path')
const usersFilePath = path.join(__dirname,'../data/users_GreenHome.json');
const usersList = JSON.parse(fs.readFileSync(usersFilePath, {encoding:'utf-8'}));
const avatarsFilePath = path.join(__dirname,'../public/images/users');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, avatarsFilePath)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "_" + path.basename(file.originalname, path.extname(file.originalname)) +'_' + Date.now() + path.extname(file.originalname))
    }
  })
  
const upload = multer({storage: storage})

const usersValidator = require('../middlewares/usersValidator')
const authMiddleware = require('../middlewares/authMiddleware')

/* GET users listing. */
router.get('/login',authMiddleware.login, userController.login);
router.post('/login', upload.any(),usersValidator.login ,userController.processLogin)
router.get('/register',authMiddleware.login, userController.register);
router.post('/register', upload.any(),usersValidator.register ,userController.processRegister)
router.get('/Profile', upload.any(),authMiddleware.profile, userController.profile)

router.post('/logout', userController.logout)

module.exports = router;
