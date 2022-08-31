const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTypeSchema = new mongoose.Schema({
  typeName: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("userType", userTypeSchema);
