const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  services: {
    type: Number,
  },
  domain: {
    type: String,
  },
  clientName: {
    type: String,
  },
  price: {
    type: Number,
  },
  billingCycle: {
    type: String,
  },
  nextDueDate: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Services", UserSchema);
