const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  tanggal: {
    type: String,
  },
  namaProduk: {
    type: String,
  },
  harga: {
    type: String,
  },
  jumlah: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  keterangan: {
    type: String,
  },
});

module.exports = mongoose.model("penjualan_kopi", UserSchema);
