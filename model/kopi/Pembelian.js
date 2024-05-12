const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  tanggal: {
    type: String,
  },
  namaSupplier: {
    type: String,
  },
  keterangan: {
    type: String,
  },
  nomorTelepon: {
    type: String,
  },
  statusPembelian: {
    type: String,
  },
  jumlah: {
    type: Number,
    default: 0,
  },
  harga: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("pembelian_kopi", UserSchema);
