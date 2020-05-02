const express = require("express");
const routes = express.Router();

const Product = require("../models/product.model");

routes.get("/", (req, res) => {
  Product.find({})
    .then((products) => {
      res.status(200).json(products);
      console.log(products);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error: "Something went wrong." });
    });
});

routes.get("/:id", (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then((p) => res.status(200).json(p))
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error: "Something went wrong." });
    });
});

routes.post("/", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.status(200).send(product);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error: "Something went wrong." });
    });
});

module.exports = routes;
