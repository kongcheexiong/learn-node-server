const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const uploadFiles = (req, res) => {
  if (req.file) {
    res.status(200).json(req.file);
  }
};

// get image
const showImage = (req, res, next) => {
  var options = {
    root: "images",  //path.join(__dirname, "../../images"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
};

module.exports = { uploadFiles, showImage };
