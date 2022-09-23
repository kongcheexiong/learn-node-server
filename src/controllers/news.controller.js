
const News = require("../models/news.model")

//create
const createNews = async (req,res)=>{

    const news = new News({...req.body, fileName: req.file.filename})
    await news.save((err, result)=>{
        if(err){
            console.log(err)
            return res.status(400).json({message: "failed to insert"})
        }
        return res.status(201).json({message: result})

    })
    
}
//update 
const updateNews = async (req,res)=>{
    
}
//delete
const deleteNews = async (req,res)=>{
    
}
//retrive
const getNews = async (req,res)=>{

   await News.find()
    .populate("userType")
    .populate("newsType")
    .sort({createAt: -1})
    .exec((err, result)=>{
    if(err){
        return res.status(404).json({
            message: "not found"
        })
    } 
    console.log("=======>",result)
    return res.status(200).json({message: "success",data: result})
   })
    
}

module.exports = {
    createNews,
    getNews,
    deleteNews,
    updateNews
}