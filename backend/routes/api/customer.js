const express = require("express");
const { authenticate, isValidId } = require("../../middlewares");
const customerController = require("../../controllers/customerController");

const router = express.Router();

router.get("/", authenticate, customerController.getListCustomers);

router.get(
  "/:customerId",
  authenticate,
  isValidId,
  customerController.getCustomerById
);

module.exports = router;
