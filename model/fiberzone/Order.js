const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  order: {
    type: Number,
  },
  clientName: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  total: {
    type: Number,
  },
  paymentStatus: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("order", UserSchema);
