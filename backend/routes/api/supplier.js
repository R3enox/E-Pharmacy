const express = require("express");
const {
  authenticate,
  isEmptyBody,
  validateBody,
} = require("../../middlewares");
const supplierController = require("../../controllers/supplierController");
const { schemas } = require("../../models/supplier");

const router = express.Router();

router.get("/", authenticate, supplierController.getListSuppliers);

router.post(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(schemas.supplierAddUpdateSchema),
  supplierController.addSupplier
);

router.put(
  "/:supplierId",
  authenticate,
  isEmptyBody,
  validateBody(schemas.supplierAddUpdateSchema),
  supplierController.updateSupplier
);

module.exports = router;
