const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
  tanggal: {
    type: String,
  },
  keterangan: {
    type: String,
  },
  jumlah: {
    type: Number,
    default: 0,
  },
  bunga: {
    type: String,
  },
  total: {
    type: Number,
    default: 0,
  },
  pendapatan: {
    type: Number,
    default: 0,
  },
  idNasabah: {
    type: objectId,
  },
});

module.exports = mongoose.model("peminjaman", UserSchema);
