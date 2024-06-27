const { isValid, parse } = require("date-fns");

const dateValidator = [
  function (value) {
    const date = parse(value, "MMM d, yyyy", new Date());
    return isValid(date);
  },
  "Invalid date format",
];

module.exports = dateValidator;
