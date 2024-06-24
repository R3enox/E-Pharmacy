const { Supplier } = require("../models/supplier");
const { ctrlWrapper, setPaginationOptions, HttpError } = require("../helpers");

const getListSuppliers = async (req, res, next) => {
  const { page = 1, limit = 5, name } = req.query;

  const filter = {};
  if (name) filter.name = { $regex: name, $options: "i" };

  const paginationOptions = setPaginationOptions(page, limit);

  const [
    {
      paginatedResult,
      totalCount: [{ totalCount } = { totalCount: 0 }],
    },
  ] = await Supplier.aggregate([
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

  res.json({ paginatedResult, totalCount });
};

const addSupplier = async (req, res) => {
  const result = await Supplier.create({ ...req.body });
  const newResult = await Supplier.findById(result._id).select(
    "-createdAt -updatedAt"
  );
  res.status(201).json(newResult);
};

const updateSupplier = async (req, res) => {
  const { supplierId } = req.params;
  const result = await Supplier.findByIdAndUpdate(supplierId, req.body, {
    new: true,
  }).select("-createdAt -updatedAt");
  if (!result) throw HttpError(404, "Not found");
  res.json(result);
};

module.exports = {
  getListSuppliers: ctrlWrapper(getListSuppliers),
  addSupplier: ctrlWrapper(addSupplier),
  updateSupplier: ctrlWrapper(updateSupplier),
};
