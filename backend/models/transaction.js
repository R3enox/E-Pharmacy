const { Schema, model } = require("mongoose");

const types = ["Expense", "Income"];

// name;
// ("Qonto billing");
// amount;
// ("-49.88");
// type;
// ("Expense");

const transactionSchema = new Schema(
  {
    name: { type: String, required: true },
    amount: { type: String, required: true },
    type: { type: String, enum: types, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = model("transaction", transactionSchema);

module.exports = { Transaction };
