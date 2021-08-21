const Dish = require("../models/Dish");
const Restaurant = require("../models/Restaurant");

//Create Resturnt
exports.createrestaurant = async (req, res, next) => {
  try {
    const { name, address, cuisine, description, contactnumber } = req.body;
    const user = req.user;
    const restaurant = new Restaurant({
      name,
      address,
      cuisine,
      description,
      contactnumber,
      user,
    });

    const dishes = await this.adddish(req.body.dishes);
    restaurant.dishes = dishes;
    restaurant.save();

    res.status(200).json({ status: "success", data: { restaurant } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "fail", msg: err.message });
  }
};

//Get All REstaurants
exports.getallrestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ status: "success", data: { restaurants } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

//Get Restaurant
exports.getrestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate(
      "dishes"
    );
    res.status(200).json({ status: "success", data: { restaurant } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Update Restaurant
exports.updaterestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json({ status: "success", data: { restaurant } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Get Restaurant by user
exports.getmyres = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({ user: req.user });
    res.status(200).json({ status: "success", data: { restaurant } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};

// Add Dishes to the restaurant
exports.adddish = async (dishesData) => {
  const dishes = await Dish.create(dishesData);
  let dishes_ids = [];
  dishes_ids = dishes.map((dish) => dish._id);
  console.log(dishes_ids);
  return dishes_ids;
};
