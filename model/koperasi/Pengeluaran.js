const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  tanggal: {
    type: String,
  },
  namaBarangJasa: {
    type: String,
  },
  deskripsi: {
    type: String,
  },
  harga: {
    type: Number,
    default: 0,
  },
  jumlah: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("pengeluaran", UserSchema);
