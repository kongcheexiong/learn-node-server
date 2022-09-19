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
  to:{
    type: [Schema.Types.ObjectId],
    ref: "userType"
  },
  /// reference form collection userType
  type: {
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
