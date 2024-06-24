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
    id: {
      type: Schema.Types.ObjectId,
      required: [true, "Supplier id is required"],
    },
    photo: { type: String, default: "" },
    name: { type: String, required: [true, "Customer info is required"] },
    suppliers: { type: String, required: [true, "Suppliers is required"] },
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
  stock: Joi.string().required(),
  price: Joi.string().required(),
  category: Joi.string().required(),
});

const schemas = { productAddUpdateSchema };

productSchema.post("save", handleMongooseError);

const Product = model("product", productSchema);

module.exports = { Product, schemas };
