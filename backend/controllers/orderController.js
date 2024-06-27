const { Order } = require("../models/order");
const { ctrlWrapper, setPaginationOptions } = require("../helpers");

const getListOrders = async (req, res, next) => {
  const { page = 1, limit = 5, name } = req.query;

  const filter = {};
  if (name) filter.name = { $regex: name, $options: "i" };

  const paginationOptions = setPaginationOptions(page, limit);

  const [
    {
      paginatedResult,
      totalCount: [{ totalCount } = { totalCount: 0 }],
    },
  ] = await Order.aggregate([
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

module.exports = {
  getListOrders: ctrlWrapper(getListOrders),
};
