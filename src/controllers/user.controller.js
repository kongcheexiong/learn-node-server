const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const salt = process.env.bcrypt_salt_string || 10

//insert user
const InsertUser = async (req, res) => {
    const image = req.file.filename

    console.log("file===>",req.file)
    console.log("body===>",req.body)
    const hash_password = await bcrypt.hash(req.body.password, salt)
    
  try {
    if (req.body) {
      const user = new User({...req.body, image: req.file.filename, password: hash_password 
    });
      await user.save((err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        //console.log('======>',result);
        return res.status(200).json({
          message: "create user successfully",
          status: "200",
          data: result,
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};
// user login 
const userLogin = async (req,res)=>{
    console.log(req.body)
    const password = req.body.password
    const isValidPassword = bcrypt.compareSync(password,"$2b$10$c82x8s2UBojTgaSoKrnHFOW.OkOT7bl7oR5tLm3BQddH2DAz65waq");
    if(isValidPassword){
        return res.status(200).json({
            message: 'login successfully'
        })

    } else { 
        return res.status(200).json({
        message: 'password is not correct'
    })}


}
module.exports = { InsertUser,userLogin };
