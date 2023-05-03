const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  someValue: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});
module.exports = mongoose.model("Product", productsSchema);
