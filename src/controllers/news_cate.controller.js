const NewsCategory = require("../models/news_cate.model");

//create
const createNewsCate = async (req, res) => {
  console.log(req.body);
  const cate = new NewsCategory(req.body);
  await cate.save((err, result) => {
    if (err) {
      return res
        .status(400)
        .json({ message: `cannot insert user for ${req.body}` });
    }
    return res.status(200).json({
      data: result,
    });
  });
};
//update
const updateNewsCate = async (req, res) => {
  await NewsCategory.updateOne(
    { _id: req.body.id },
    {
      $set: {
        typeName: req.body.name,
        createAt: Date.now(),
      },
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({ message: "err" });
    }
    return res.status(200).json({ message: "update success", data: result });
  });
};
//delete
const deleteNewsCate = async (req, res) => {
  console.log("req.query");
  await NewsCategory.findByIdAndDelete(req.params.id).exec((err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.status(200).json({ message: "delete success", data: result });
  });
};
//get Data
const getNewsCate = async (req, res) => {
  await NewsCategory.find().exec((err, result) => {
    if (err) {
      return res.status(400).json({ message: "err" });
    }
    return res.status(200).json({ data: result });
  });
};

module.exports = {
  getNewsCate,
  createNewsCate,
  deleteNewsCate,
  updateNewsCate,
};
