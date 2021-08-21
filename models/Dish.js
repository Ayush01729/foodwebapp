const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter name of your dish"],
  },
  price: {
    type: Number,
    required: [true, "Enter Price of your dish"],
  },
  type: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "Describe your dish"],
  },
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
