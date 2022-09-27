
const UserType = require("../models/userType.model");

/// insert user type
const insertUserType = async (req, res) => {
  const _typeName = await req.query.typeName;
  //find if usertype already exist
  await UserType.find({ typeName: _typeName }).exec(async (err, result) => {
    if (result.length > 0) {
      return res.status(400).json({
        message: "userType already exist",
      });
    }
    // console.log(typeof req.query)
    // create instance
    const type = new UserType({
      typeName: _typeName,
    });

    // insert to database
    await type
      .save()
      .then(() => {
        return res.status(200).json({
          message: "create user type successfully",
          status: "200",
          data: type,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          message: "err",
          status: "400",
          data: err,
        });
      });
  });
};
// get all userType
const getAlluserType = async (req, res) => {

  const totalUserType = await UserType.find().exec()

  await UserType.find()
    .sort({ createAt: -1 })
    .skip(req.params.skip ? parseInt(req.params.skip) : 0)
    .limit(req.params.limit ? parseInt(req.params.limit) : 30)
    .exec((err, result) => {
      // console.log(result);
      return res.status(200).json({
        total: totalUserType.length,
        data: result,
      });
    });
};
/// delete userType
const deleteUserType = async (req,res)=>{

  const id = req.query.id
  // console.log("======>",req.query.id)

  await UserType.findByIdAndDelete(id).exec((err,result)=>{
    if(err){
      console.log(err)
      return res.status(400).json({message: "err"})
    }
    return res.status(200).json({data: result, message: "delete successfully"})
  })


}
//update userType
const updateUserType = async (req,res)=>{
  await UserType.findByIdAndUpdate(req.body.id,{
    typeName: req.body.typeName

  }).exec((err, result)=>{
    return res.status(200).json({
      message : `update userType for ${req.body.id}`,
      data: result

    })

  })

}

module.exports = { insertUserType, getAlluserType,deleteUserType,updateUserType };
