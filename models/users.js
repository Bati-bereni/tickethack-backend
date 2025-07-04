const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  firstName : String,
  email: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
