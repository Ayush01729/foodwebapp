const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Enter the price"],
  },
  restaurantname: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  dishdesc: [
    new mongoose.Schema(
      {
        dish: {
          type: mongoose.Schema.ObjectId,
          ref: "Dish",
        },
        quantity: {
          type: Number,
          required: [true, "Enter quantity of dish"],
        },
      },
      { _id: false }
    ),
  ],
});

module.exports = mongoose.model("Order", orderSchema);
