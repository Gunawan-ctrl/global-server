const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  identify: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
