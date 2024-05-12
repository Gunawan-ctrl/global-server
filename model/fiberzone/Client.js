const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  services: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("client", UserSchema);
