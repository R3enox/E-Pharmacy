const { Schema, model } = require("mongoose");

const types = ["Expense", "Income"];

const transactionSchema = new Schema(
  {
    name: { type: String, required: true },
    amount: { type: String, required: true },
    type: { type: String, enum: types, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = model("income-expenses", transactionSchema);

module.exports = { Transaction };
