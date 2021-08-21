const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your Name"],
  },

  email: {
    type: String,
    required: [true, "Your Email"],
    unique: true,
    vaidate: [validator.isEmail, "PRovide a valid email"],
  },

  password: {
    type: String,
    required: [true, "Password"],
    minlength: 8,
    select: false,
  },

  role: {
    type: String,
    default: "user",
    enum: ["user", "restaurant", "admin"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
