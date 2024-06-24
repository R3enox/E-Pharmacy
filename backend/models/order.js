const { Schema, model } = require("mongoose");
const dateValidator = require("../helpers/dateValidator");

const orderSchema = new Schema(
  {
    photo: { type: String, default: "" },
    name: { type: String, required: [true, "Customer info is required"] },
    address: { type: String, required: [true, "Address is required"] },
    products: { type: String, required: [true, "Product is required"] },
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    status: { type: String, required: [true, "Status is required"] },
    order_date: {
      type: String,
      validate: dateValidator,
      required: [true, "Order date is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = { Order };
