const User = require('../models/user.model')

//insert user 
const InsertUser = async (req,res)=>{
    console.log(req.body) ///
  try {
    if(req.body){
        const user = new User(req.body)
    user.save(
        (err, result)=>{
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
            return res.status(200).json({
                message: 'create user successfully',
                status: '200',
                data: result
            })

        }
    )
    }
  } catch (error) {
    console.log(error)
  }
}
//delete user

module.exports ={ InsertUser }