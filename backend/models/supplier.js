const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");
// const dateValidator = require("../helpers/dateValidator");

const statuses = ["Active", "Deactive"];

const supplierSchema = new Schema(
  {
    name: { type: String, required: [true, "Customer info is required"] },
    address: { type: String, required: [true, "Address is required"] },
    suppliers: { type: String, required: [true, "Suppliers is required"] },
    date: {
      type: String,
      // validate: dateValidator,
      required: [true, "Date is required"],
    },
    amount: { type: String, require: [true, "Amount is required"] },
    status: {
      type: String,
      enum: statuses,
      required: [true, "Status is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const supplierAddUpdateSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  suppliers: Joi.string().required(),
  date: Joi.string().required(),
  amount: Joi.string().min(1).required(),
  status: Joi.string()
    .valid(...statuses)
    .required(),
});

const schemas = { supplierAddUpdateSchema };

supplierSchema.post("save", handleMongooseError);

const Supplier = model("supplier", supplierSchema);

module.exports = { Supplier, schemas };
