const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const restaurantRoute = require("./routes/restaurantRoute");
const orderRoute = require("./routes/orderRoute");

require("dotenv").config();
const app = express();

const port = 5000;

const DB =
  "mongodb+srv://user:devsoc@@cluster0.uzena.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("No connection"));

// app.get("/api/customers", (req, res) => {
//   const customers = [
//     { id: 1, firstname: "John", lastname: "Doe" },
//     { id: 2, firstname: "John", lastname: "Cena" },
//     { id: 3, firstname: "John", lastname: "knows" },
//   ];

//   res.json(customers);
// });
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/res", restaurantRoute);
app.use("/api/order", orderRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "food-delivery-app", "build", "index.html")
    );
  });
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
