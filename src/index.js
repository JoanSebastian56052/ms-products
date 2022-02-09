'use strict'
const { v4: uuidv4 } = require('uuid');
const ProductController = require('./product/controllers/ProductController.js');

module.exports.productsFeatureHandler = async  (event, context, callback) => {
    let productController = new ProductController();
    return productController.getProductFeature(event, context, callback);
}

module.exports.createProductHandler = (event, context, callback) => {
    let productController = new ProductController();
    return productController.createProduct(event, context, callback);
}

module.exports.updateProductHandler = (event, context, callback) => {
    let productController = new ProductController();
    return productController.updateProduct(event, context, callback);
}

module.exports.deleteProductHandler = (event, context, callback) => {
    let productController = new ProductController();
    return productController.deleteProduct(event, context, callback);
}

module.exports.getProductHanlder = (event, context, callback) => {
    let productController = new ProductController();
    return productController.getProduct(event, context, callback);
}
