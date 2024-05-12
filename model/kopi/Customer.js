const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  namaCustomer: {
    type: String,
  },
  alamat: {
    type: String,
  },
  nomorTelepon: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("customer", UserSchema);
