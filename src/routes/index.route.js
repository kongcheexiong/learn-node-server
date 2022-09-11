const userType = require('../controllers/userType.controller');
const userController = require('../controllers/user.controller')

const multer = require('multer')
//const upload = require('../middlewares/image.middleware')
const upload = require('../middlewares/image.middleware')

// const uploadImage = require('../middlewares/uploadimage.middleware')


const uploadFiles = require('../controllers/image.controller')
const verifyToken = require('../middlewares/verifyToken.middleware')

const route = require('express').Router()

/// userType route
route.post("/userType/insert",verifyToken, userType.insertUserType);
route.get("/user-types", verifyToken, userType.getAlluserType)
route.delete("/user-types/delete", verifyToken, userType.deleteUserType)
route.put("/user-types/update", verifyToken, userType.updateUserType)




/// user route
route.post("/user/insert",upload.single("image"), userController.InsertUser); // upload image & save image name to db
route.post("/login", userController.userLogin);

// route.post("/user/insert",upload.single("image")); 
// route.post("/user/insert",userController.InsertUser); 

//image route
//route.post("/upload/images", upload.single("image") ,uploadFiles.uploadFiles) // upload image without save image name to database
route.get("/image/",uploadFiles.showImage) // show image

// route.post("/upload", uploadImage.single("image"), (req,res)=>{
//     res.send({message: 'success'})
// } )

route.get("/all-user", userController.getAlluser)


module.exports = route