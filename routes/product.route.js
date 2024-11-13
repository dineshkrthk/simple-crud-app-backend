const express = require("express")
const Product = require("../models/product.model")
const router = express.Router();
const {getProducts, getProduct, addProduct, updatedProduct, deleteProduct} = require("../controllers/product.controller.js")

//all product
router.get('/', getProducts);
//single products
router.get("/:id" , getProduct);
//create product
router.post('/' , addProduct);
//update product
router.put('/:id', updatedProduct);
//delete product
router.delete('/:id' , deleteProduct);

module.exports = router;