require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const indexRouter = require("./routes");
const mongoose = require("mongoose");
const app = express();
const PORT = Number(process.env.PORT);
app.use(morgan("dev"));
mongoose.connect(process.env.DB).then(() => {
  console.log("database is on");
});

app.use((req, res, next) => {
  req.body.country = "Nepal";
});
app.use(express.static("public"));
app.use(express.json());

app.use("/", indexRouter);
app.use((err, req, res, next) => {
  const errMsg = err ? toString() : "Wrong";
  res.status(500).json({ msg: errMsg });
});

app.listen(PORT, () => {
  console.log("Server is ohh yeahhh");
});
