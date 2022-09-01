const userType = require('../controllers/userType.controller')
const userController = require('../controllers/user.controller')

const multer = require('multer')
//const upload = require('../middlewares/image.middleware')
const upload = require('../middlewares/image.middleware')

const uploadImage = require('../middlewares/uploadimage.middleware')



const uploadFiles = require('../controllers/image.controller')

const route = require('express').Router()

/// userType route
route.post("/userType/insert", userType.insertUserType);


/// user route
route.post("/user/insert",upload.single("image"), userController.InsertUser); // upload image & save image name to db

// route.post("/user/insert",upload.single("image")); 
// route.post("/user/insert",userController.InsertUser); 

route.post("/user/login",  userController.userLogin);

//image route
route.post("/upload/images", upload.single("image") ,uploadFiles.uploadFiles) // upload image without save image name to database
route.get("/image/",uploadFiles.showImage) // show image

route.post("/upload", uploadImage.single("image"), (req,res)=>{
    res.send({message: 'success'})
} )




module.exports = route