const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");
const { nameRegExp, emailRegExp, passwordRegExp } = require("../regExp/regExp");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const signUpSchema = Joi.object({
  name: Joi.string().pattern(nameRegExp).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().pattern(passwordRegExp).min(6).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
});

const signInSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().pattern(passwordRegExp).min(6).required(),
});

const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const schemas = {
  signUpSchema,
  signInSchema,
  emailSchema,
  refreshSchema,
};

const User = model("user", userSchema);

module.exports = { User, schemas };
