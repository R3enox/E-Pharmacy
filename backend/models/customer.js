const { Schema, model } = require("mogoose");
const { emailRegExp } = require("../regExp/regExp");
const dateValidator = require("../helpers/dateValidator");

const customerSchema = new Schema(
  {
    photo: { type: String, default: "" },
    name: { type: String, required: [true, "Customer info is required"] },
    email: {
      type: String,
      match: emailRegExp,
      unique: true,
      required: [true, "Email is required"],
    },
    spent: { type: String, required: [true, "Spent is required"] },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    address: { type: String, required: [true, "Address is required"] },
    register_date: {
      type: String,
      validate: dateValidator,
      required: [true, "Order date is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Customer = model("customer", customerSchema);

module.exports = { Customer };
