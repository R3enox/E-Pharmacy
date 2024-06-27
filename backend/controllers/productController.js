const { Product } = require("../models/product");
const { ctrlWrapper, setPaginationOptions, HttpError } = require("../helpers");
const { categories } = require("../constants/constants");
const { Supplier } = require("../models/supplier");

const getListProducts = async (req, res, next) => {
  const { page = 1, limit = 5, name } = req.query;

  const filter = {};
  if (name) filter.name = { $regex: name, $options: "i" };

  const paginationOptions = setPaginationOptions(page, limit);

  const [
    {
      paginatedResult,
      totalCount: [{ totalCount } = { totalCount: 0 }],
    },
  ] = await Product.aggregate([
    {
      $facet: {
        paginatedResult: [
          { $match: filter },
          { $sort: { createdAt: -1 } },
          { $skip: paginationOptions.skip },
          { $limit: paginationOptions.limit },
        ],
        totalCount: [{ $match: filter }, { $count: "totalCount" }],
      },
    },
  ]);

  const suppliers = await Supplier.find({}, "suppliers").exec();
  const suppliersResponse = suppliers.map((doc) => ({
    suppliers: doc,
  }));

  res.json({
    paginatedResult,
    totalCount,
    categories: categories,
    suppliers: suppliersResponse,
  });
};

const addProduct = async (req, res) => {
  const result = await Product.create({ ...req.body });
  const newResult = await Product.findById(result._id).select(
    "-createdAt -updatedAt"
  );
  res.status(201).json(newResult);
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const result = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  }).select("-createdAt -updatedAt");
  if (!result) throw HttpError(404, "Not found");
  res.json(result);
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const result = await Product.findByIdAndDelete(productId);
  if (!result) throw HttpError(404, "Not found");
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  getListProducts: ctrlWrapper(getListProducts),
  addProduct: ctrlWrapper(addProduct),
  updateProduct: ctrlWrapper(updateProduct),
  deleteProduct: ctrlWrapper(deleteProduct),
};
