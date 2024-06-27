const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (paramId) => {
  return (req, res, next) => {
    const id = req.params[paramId];

    if (!isValidObjectId(id)) {
      throw HttpError(400, `'${id}' is not valid id`);
    }

    next();
  };
};

module.exports = isValidId;
