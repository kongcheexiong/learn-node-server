const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const salt = process.env.bcrypt_salt_string || 10;
const jwt = require("jsonwebtoken");

const jwt_secret = process.env.jwt_secret;

//insert user
const InsertUser = async (req, res) => {
  console.log("file===>", req.file);
  console.log("body===>", req.body);

  const hash_password = await bcrypt.hash(req.body.password, salt);
  try {
    if (req.body) {
      //check if user in database or not
      const validUser = await User.find({
        userId: req.body.userId,
      });
      console.log("validUser ====>", validUser);
      if (Array.isArray(validUser) && validUser.length > 0) {
        return res.status(400).json({
          message: "user already exist",
          status: 400,
        });
      }
      // if user not exist in database , we can create new user
      const user = new User({
        ...req.body,
        image: req.file.filename,
        password: hash_password,
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
const userLogin = async (req, res) => {
  //const {userName, password , role} = req.body
  const userId = req.body.userId;
  const password = req.body.password;
  const role = req.body.role;
  // check if  user valid
  await User.find({
    userId: userId,
  }).exec(async (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "username is not correct",
      });
    }
    // check if user password is correct
    console.log("===>", user);
    const userPassword = user[0].password;
    const isPasswordCorrect = bcrypt.compareSync(password, userPassword);
    if (!isPasswordCorrect) {
      // console.log("password correct");
      return res.status(404).json({
        message: "user password is not correct",
        status: 404,
      });
    }
    // use jwt to encode data => token
    const token = await jwt.sign(
      {
        userId: user[0].userId,
      },
      jwt_secret,
      {
        expiresIn: 5,
      }
    );

    return res.status(200).json({
      message: "login successfully",
      token: token,
      data: user,
    });
    // console.log(result)
  });
};

//get all users
const getAlluser = () => {};

module.exports = { InsertUser, userLogin, getAlluser };
