const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const User = require("./model/users");

const auth = require("./routes/auth");
const job = require("./routes/job");

app.use(cors());
app.use(bodyParser());
app.use("/api/auth", auth);
app.use("/api/job", job);
app.get("/", async (req, res) => {
  console.log(await User.find());
});

// mongoose.connect("mongodb://localhost:27017/db").then(() => {
//   console.log("mongodb connected");
// });
mongoose.connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("mongo")
  })

app.listen(5000, () => {
  console.log("start");
});
