const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of dish"],
  },
  address: {
    type: String,
    required: [true, "Enter the address of the restaurant"],
  },
  cuisine: {
    type: String,
    default: "Indian",
  },
  description: {
    type: String,
    required: [true, "Describe your dish"],
  },
  contactnumber: {
    type: Number,
    required: [true, "Contact number of the restaurant"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  dishes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Dish",
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
