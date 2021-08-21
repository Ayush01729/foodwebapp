const express = require("express");
const router = express.Router();
const dishcontroller = require("../controller/dishController");
const authcontroller = require("../controller/authController");

router.get("/", dishcontroller.getalldishes);
router.get("/:id", dishcontroller.getdish);

router.use(authcontroller.protect);

router.patch(
  ":/id",
  authcontroller.roles(["admin"]),
  dishcontroller.updatedish
);

router.delete(
  "/:id",
  authcontroller.roles(["admin"]),
  dishcontroller.deletedish
);

module.exports = router;
