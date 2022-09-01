const userType = require('../controllers/userType.controller')
const userController = require('../controllers/user.controller')

const multer = require('multer')
const upload = require('../middlewares/image.middleware')

const uploadFiles = require('../controllers/image.controller')

const route = require('express').Router()

/// userType route
route.post("/userType/insert", userType.insertUserType);


/// user route
route.post("/user/insert", upload.single("image"), userController.InsertUser);
route.post("/user/login",  userController.userLogin);

//image route
route.post("/upload/images", upload.single("image") ,uploadFiles.uploadFiles)
route.get("/image/:name",uploadFiles.showImage)



module.exports = route