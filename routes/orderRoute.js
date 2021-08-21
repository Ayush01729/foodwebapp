const express = require("express");
const router = express.Router();

const authcontroller = require("../controller/authController");
const ordercontroller = require("../controller/orderController");

router.use(authcontroller.protect);

router.get(
  "/my",
  authcontroller.roles(["admin", "user"]),
  ordercontroller.getmyorder
);

router.post(
  "/",
  authcontroller.roles(["admin", "user"]),
  ordercontroller.createorder
);

module.exports = router;
