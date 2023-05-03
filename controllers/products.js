const Products = require("../models/products");
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  res.status(200).send("some login route");
};
const getData = async (req, res) => {
  res.status(200).send("some data route");
};
module.exports = {
  login,
  getData,
};
