const Order = require("../models/Order");

//Create Order
exports.createorder = async (req, res) => {
  try {
    const { amount, restaurantname, dishdesc } = req.body;
    const user = req.user;
    const order = await Order.create({
      amount,
      restaurantname,
      user,
      dishdesc,
    });
    res.status(200).json({ status: "success", data: { order } });
  } catch (err) {
    console.log(err.message);
    res.status(200).json({ status: "fail", msg: err.message });
  }
};

//Get orders of user
exports.getmyorder = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user }).populate(
      "dishdesc.dish"
    );
    res.status(200).json({ status: "success", data: { orders } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
