const routers= require('express').Router();

const userController = require('../controllers/userController.js');

//register
routers.post('/register',userController.register);
//sign in
routers.post('/login',userController.signin);

module.exports=routers