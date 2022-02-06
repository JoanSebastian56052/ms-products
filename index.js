'use strict'
const { v4: uuidv4 } = require('uuid');
const ProductController = require('./src/product/controllers/ProductController.js');

module.exports.productsFeatureHandler = (event, context, callback) => {
    let productController = new ProductController();
    productController.getProductFeature(event, context, callback);
}

module.exports.createProductHandler = (event, context, callback) => {
    let productController = new ProductController();
    productController.createProduct(event, context, callback);
}

module.exports.updateProductHandler = (event, context, callback) => {
    let productController = new ProductController();
    productController.updateProduct(event, context, callback);
}

module.exports.deleteProductHandler = (event, context, callback) => {
    let productController = new ProductController();
    productController.deleteProduct(event, context, callback);
}

module.exports.getProductHanlder = (event, context, callback) => {
    let productController = new ProductController();
    productController.getProduct(event, context, callback);
}
