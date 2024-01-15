const mongoose = require("mongoose");
const { Schema } = mongoose;

const newSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  connected: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("user", newSchema);
module.exports = User;
