const { Customer } = require("../models/customer");
const { ctrlWrapper, setPaginationOptions, HttpError } = require("../helpers");

const getListCustomers = async (req, res, next) => {
  const { page = 1, limit = 5, name } = req.query;

  const filter = {};
  if (name) filter.name = { $regex: name, $options: "i" };

  const paginationOptions = setPaginationOptions(page, limit);

  const [
    {
      paginatedResult,
      totalCount: [{ totalCount } = { totalCount: 0 }],
    },
  ] = await Customer.aggregate([
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

const getCustomerById = async (req, res) => {
  const { customerId } = req.params;
  console.log(customerId);
  const result = await Customer.findById(customerId).select(
    "-createdAt -updatedAt"
  );
  if (!result) throw HttpError(404, "Not found");
  res.json(result);
};

module.exports = {
  getListCustomers: ctrlWrapper(getListCustomers),
  getCustomerById: ctrlWrapper(getCustomerById),
};
