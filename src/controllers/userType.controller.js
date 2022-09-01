const UserType = require("../models/userType.model");

/// insert user type
const insertUserType = async (req, res) => {
  const _typeName = await req.query.typeName;
 // console.log(typeof req.query)

  // create instance
  const type = new UserType({
    typeName: _typeName,
  });

  // insert to database
  await type.save()
    .then(()=>{
    return res.status(200).json({
        message: 'create user type successfully',
        status: '200',
        data: type
    })
  }).catch(err => {
    console.log(err)
    return res.status(400).json({
        message: 'err',
        status: '400',
        data: err
    })

  })

};
/// delete userType
//update userType

module.exports = {insertUserType}
