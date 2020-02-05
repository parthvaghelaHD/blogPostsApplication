const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  }
});

const blogUser = mongoose.model('blogUsers', userSchema);
module.exports = blogUser;