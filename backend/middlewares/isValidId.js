const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { customerId } = req.params;
  if (!isValidObjectId(customerId)) {
    next(HttpError(400, `${customerId} is not a valid`));
  }
  next();
};

module.exports = isValidId;
