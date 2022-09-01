const { query } = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const uploadFiles = (req, res) => {
  if (req.file) {
    res.status(200).json(req.file);
  }
};

// get image
const showImage = (req, res) => {
    // option
  var options = {
    root: "./images",  //floder where u store your images
  };
  var fileName = req.query.name; // image name

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("Sent:", fileName);
    }
  });
};

module.exports = { uploadFiles, showImage };
