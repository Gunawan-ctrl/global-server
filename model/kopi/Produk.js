const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  namaProduk: {
    type: String,
  },
  hpp: {
    type: String,
  },
  hargaJual: {
    type: Number,
    default: 0,
  },
  keuntunganPerProduk: {
    type: Number,
    default: 0,
  },
  stok: {
    type: Number,
    default: 0,
  },
  fotoProduk: {
    type: String,
  },
  keterangan: {
    type: String,
  },
});

module.exports = mongoose.model("produk", UserSchema);
