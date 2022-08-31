const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  /// reference form collection userType
  type: {
    type: Schema.Types.ObjectId,
    ref: "userType",
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    //required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
