const NewsCategory = require("../models/news_cate.model")

//create
const createNewsCate = async (req,res)=>{

    const cate = new NewsCategory(req.body)
    await cate.save((err, result)=>{
        if(err){
            return res.status(400).json({message: `cannot insert user for ${req.body}`})
        }
        return res.status(200).json({
            data: result
        })


    })

    
}
//update 
const updateNewsCate = async (req,res)=>{
    
}
//delete
const deleteNewsCate = async (req,res)=>{
    
}
//retrive
const getNewsCate = async (req,res)=>{
    
}

module.exports = {
    getNewsCate,
    createNewsCate,
    deleteNewsCate,
    updateNewsCate
}