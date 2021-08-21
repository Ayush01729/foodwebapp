const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

router.get("/", authController.protect, authController.getuserfromtoken);

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
