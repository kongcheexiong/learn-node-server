const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
  
  },

  userType:{
    type: [Schema.Types.ObjectId],
    ref: "userType"
  },
  /// reference form collection userType
  newsType: {
    type: [Schema.Types.ObjectId],
    ref: "newsType",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  endAt: {
    type: Date,
  },
});

module.exports = mongoose.model("news", schema);
