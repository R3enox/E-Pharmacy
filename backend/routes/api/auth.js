const express = require("express");
const authController = require("../../controllers/authController");
const {
  validateBody,
  authenticate,
  isEmptyBody,
} = require("../../middlewares");

const { schemas } = require("../../models/user");
const router = express.Router();

router.post(
  "/register",
  isEmptyBody,
  validateBody(schemas.signUpSchema),
  authController.signUp
);

router.post(
  "/login",
  isEmptyBody,
  validateBody(schemas.signInSchema),
  authController.singIn
);

router.get("/user-info", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.signOut);

module.exports = router;
