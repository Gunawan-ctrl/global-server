const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  code: {
    type: Number,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("location", UserSchema);
