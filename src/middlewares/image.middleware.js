const multer = require('multer')
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file,cb) =>{
        cb(null, "images")
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const type = (req, file, cb)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png"){
        cb(null,true)
    }else{
        cb(null, false)
    }

}
const upload = multer({storage: storage, fileFilter: type})

module.exports = upload