const userType = require('../controllers/userType.controller')
const userController = require('../controllers/user.controller')

const route = require('express').Router()

/// userType route
route.post("/userType/insert", userType.insertUserType);


/// user route
route.post("/user/insert", userController.InsertUser);



module.exports = route