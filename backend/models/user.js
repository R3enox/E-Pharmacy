const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/;
const nameRegExp = /^[a-zA-Z0-9_\- ]{2,30}$/;
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
    token: {
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

const schemas = {
  signUpSchema,
  signInSchema,
  emailSchema,
};

const User = model("user", userSchema);

module.exports = { User, schemas };