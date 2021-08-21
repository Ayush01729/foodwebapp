const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/userController");
const authcontroller = require("../controller/authController");

router.get("/", usercontroller.getallusers);
router.get("/:id", usercontroller.getuser);

router.patch(
  "/:id",
  authcontroller.roles(["admin", "user"]),
  usercontroller.updateuser
);

router.delete(
  "/:id",
  authcontroller.roles(["admin"]),
  usercontroller.deleteuser
);

module.exports = router;
