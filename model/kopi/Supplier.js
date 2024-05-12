const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  ID_KATEGORI: {
    type: String,
  },
  namaSupplier: {
    type: String,
  },
  NAMA: {
    type: String,
  },
  keterangan: {
    type: String,
  },
  nomorTelepon: {
    type: String,
  },
  alamat: {
    type: String,
  },
});

module.exports = mongoose.model("supplier", UserSchema);
