const express = require("express");
const router = express.Router();
const restaurantcontroller = require("../controller/restaurantController");
const authcontroller = require("../controller/authController");

router.use(authcontroller.protect);

router.get("/", restaurantcontroller.getallrestaurants);

router.get(
  "/my",
  authcontroller.roles(["admin", "restaurant"]),
  restaurantcontroller.getmyres
);

router.get("/:id", restaurantcontroller.getrestaurant);

router.post(
  "/",
  authcontroller.roles(["admin", "restaurant"]),
  restaurantcontroller.createrestaurant
);

router.patch(
  "/:id",
  authcontroller.roles(["admin", "restaurant"]),
  restaurantcontroller.updaterestaurant
);

module.exports = router;
