const express = require("express");
const { authenticate } = require("../../middlewares");
const dashboardController = require("../../controllers/dashboardController");
const router = express.Router();

router.get("/", authenticate, dashboardController.getDashboard);

module.exports = router;
