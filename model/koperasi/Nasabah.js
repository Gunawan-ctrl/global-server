const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nama: {
    type: String,
  },
  email: {
    type: String,
  },
  alamat: {
    type: String,
  },
  kelamin: {
    type: String,
  },
  jumlahPinjaman: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
  },
  statusPinjam: {
    type: Number,
  },
});

module.exports = mongoose.model("nasabah", UserSchema);
