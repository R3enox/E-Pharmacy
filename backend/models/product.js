const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const categories = [
  "Baby Care",
  "Dental Care",
  "Eye Care",
  "Hand",
  "Head",
  "Medicine",
  "Orthopedic Products",
  "Skin Care",
  "Vitamins & Supplements",
];

const productSchema = new Schema(
  {
    photo: { type: String, default: "" },
    name: { type: String, required: [true, "Customer info is required"] },
    suppliers: {
      type: String,
      required: [true, "Supplier info is required"],
    },
    supplier: {
      type: String,
    },
    stock: { type: String, required: [true, "Stock is required"] },
    price: { type: String, required: [true, "Price is required"] },
    category: {
      type: String,
      enum: categories,
      required: [true, "Category is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const productAddUpdateSchema = Joi.object({
  name: Joi.string().required(),
  suppliers: Joi.string().required(),
  supplier: Joi.string(),
  stock: Joi.string().required(),
  price: Joi.string().required(),
  category: Joi.string().required(),
});

const schemas = { productAddUpdateSchema };

productSchema.post("save", handleMongooseError);

const Product = model("product", productSchema);

module.exports = { Product, schemas };
