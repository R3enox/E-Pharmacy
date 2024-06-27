const express = require("express");
const {
  authenticate,
  isEmptyBody,
  validateBody,
  isValidId,
} = require("../../middlewares");
const productController = require("../../controllers/productController");
const { schemas } = require("../../models/product");

const router = express.Router();

router.get("/", authenticate, productController.getListProducts);

router.post(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(schemas.productAddUpdateSchema),
  productController.addProduct
);

router.put(
  "/:productId",
  authenticate,
  isEmptyBody,
  validateBody(schemas.productAddUpdateSchema),
  productController.updateProduct
);

router.delete(
  "/:productId",
  authenticate,
  isValidId("productId"),
  productController.deleteProduct
);

module.exports = router;
