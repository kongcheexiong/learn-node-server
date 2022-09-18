const userType = require('../controllers/userType.controller');
const userController = require('../controllers/user.controller')

const multer = require('multer')
//const upload = require('../middlewares/image.middleware')
const upload = require('../middlewares/fileUpload.middleware')

// const uploadImage = require('../middlewares/uploadimage.middleware')


const uploadFiles = require('../controllers/image.controller')
const verifyToken = require('../middlewares/verifyToken.middleware')

const route = require('express').Router()

/// userType route
route.post("/userType/insert",verifyToken, userType.insertUserType);
route.get("/user-types/skip/:skip/limit/:limit", verifyToken, userType.getAlluserType)

route.delete("/user-types/delete", verifyToken, userType.deleteUserType)
route.put("/user-types/update", verifyToken, userType.updateUserType)




/// user route
route.post("/user/insert", upload.single("image"), userController.InsertUser); // upload image & save image name to db
route.post("/login", userController.userLogin);
route.get("/all-user",verifyToken, userController.getAlluser)
route.delete("/user/delete/id/:id",verifyToken, userController.deleteUser)
route.put("/user/update",upload.single("image"), userController.updateUser)
route.get("/user/user-id/:userId", userController.getUser)
// route.get("/all-user",verifyToken, userController.getAlluser)
/// params, qurey , body


route.post("/upload/image",upload.single("image")); 
route.post("/upload/file",upload.single("file")); 
route.get("/download/file/:file", (req, res) => {
    res.download(`files/${req.params.file}`);
});


//image route
//route.post("/upload/images", upload.single("image") ,uploadFiles.uploadFiles) // upload image without save image name to database
route.get("/image/",uploadFiles.showImage) // show image

// route.post("/upload", uploadImage.single("image"), (req,res)=>{
//     res.send({message: 'success'})
// } )




module.exports = route