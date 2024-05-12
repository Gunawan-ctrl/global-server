const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  tanggal: {
    type: String,
  },
  namaInventaris: {
    type: String,
  },
  jumlah: {
    type: String,
  },
  masaManfaat: {
    type: String,
  },
  tahunPerolehan: {
    type: String,
  },
  nilaiPerolehan: {
    type: Number,
    default: 0,
  },
  akumulasiPenyusutan: {
    type: Number,
    default: 0,
  },
  nilaiSisaInventori: {
    type: Number,
    default: 0,
  },
  dasarPenyusutan: {
    type: Number,
    default: 0,
  },
  tarif: {
    type: Number,
    default: 0,
  },
  sisaManfaat: {
    type: String,
  },
});

module.exports = mongoose.model("inventaris", UserSchema);
