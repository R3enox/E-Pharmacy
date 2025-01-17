const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const dashboardRouter = require("./routes/api/dashboard");
const orderRouter = require("./routes/api/order");
const productRouter = require("./routes/api/product");
const supplierRouter = require("./routes/api/supplier");
const customerRouter = require("./routes/api/customer");

const fs = require("fs/promises");
const moment = require("moment");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
  next();
});

app.use("/api/user", authRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);
app.use("/api/suppliers", supplierRouter);
app.use("/api/customers", customerRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
