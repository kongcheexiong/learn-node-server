const mongoose = require('mongoose')

const uri = process.env.mongo_uri


const connectDB = async ()=>{
    // await mongoose.connect(uri).then(()=>{
    //     console.log("connected to database")
    
    // }).catch(err) => console.log(err)
    console.log("connecting to database...")

    await mongoose
      .connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("💻 Mongodb Connected"))
      .catch(err => console.error(err));
    

} 
module.exports = connectDB