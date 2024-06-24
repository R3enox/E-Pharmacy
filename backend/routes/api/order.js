const express = require("express");
const orderController = require("../../controllers/orderController");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, orderController.getListOrders);

module.exports = router;
