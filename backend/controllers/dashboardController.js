const { Product } = require("../models/product.js");
const { Supplier } = require("../models/supplier.js");
const { Customer } = require("../models/customer.js");
const { Transaction } = require("../models/transaction.js");
const { ctrlWrapper } = require("../helpers/index.js");

const SortOptions = {
  CUSTOMERS: { updatedAt: -1 },
  TRANSACTIONS: { createdAt: -1 },
};

const Limits = {
  CUSTOMERS: 5,
  TRANSACTIONS: 6,
};

const getDashboard = async (req, res) => {
  const dbReqPromises = [
    Product.countDocuments({}),
    Supplier.countDocuments({}),
    Customer.countDocuments({}),
    Customer.find().sort(SortOptions.CUSTOMERS).limit(Limits.CUSTOMERS),
    Transaction.find()
      .sort(SortOptions.TRANSACTIONS)
      .limit(Limits.TRANSACTIONS),
  ];

  console.log(dbReqPromises);

  const [
    productsQuantity,
    suppliersQuantity,
    customersQuantity,
    recentCustomers,
    recentTransactions,
  ] = await Promise.all(dbReqPromises);

  console.log({
    productsQuantity,
    suppliersQuantity,
    customersQuantity,
    recentCustomers,
    recentTransactions,
  });

  return res.json({
    productsQuantity,
    suppliersQuantity,
    customersQuantity,
    recentCustomers,
    recentTransactions,
  });
};

module.exports = {
  getDashboard: ctrlWrapper(getDashboard),
};
