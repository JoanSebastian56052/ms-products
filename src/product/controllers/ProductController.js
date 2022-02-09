'use strict'
const ajv = require('ajv');

const createProductSchema = require('../../schemas/schemas').createProductSchema;
const updateProductSchema = require('../../schemas/schemas').updateProductSchema;
const ProductService = require('../services/ProductService.js');
const {
    BAD_REQUEST,
    SUCCESS_RESPONSE,
    INTERNAL_ERROR,
    DELETE_SUCCESS,
    RESOURCE_NOT_FOUND,
    UPDATE_SUCCESS
} = require('../../commons/Responses');

class ProductController {

    constructor() {}

    async getProductFeature(event, context, callback) {
        let response = {};
        try {
            let productService = new ProductService();
            let productFeature = await productService.getProductFeature();


            if(productFeature.length) {
                response = {
                    status: SUCCESS_RESPONSE,
                    body: productFeature
                };
            } else {
                response = {
                    status: RESOURCE_NOT_FOUND,
                    body: {
                        message: "Feature products not found"
                    }
                };
            }
             return response;
        } catch (error) {
            response = {
                status: INTERNAL_ERROR
            };
            return response;
        }
    }

    async createProduct(event, context, callback) {
        let response = {};
        try {
            const body = event.body;
            const validateSchema = new ajv().compile(createProductSchema);
            if(validateSchema(body)) {
                let productService = new ProductService();
                let createProduct = await productService.createProduct(body);
                if(createProduct) {
                    response = {
                        status: SUCCESS_RESPONSE,
                        body: createProduct
                    };
                } else {
                    response = {
                        status: INTERNAL_ERROR,
                        body: {
                            message: "Error creating the product"
                        }
                    };
                }
            } else {
                response = {
                    status: BAD_REQUEST
                };
            }
            return response;
        } catch (error) {
            response = {
                status: INTERNAL_ERROR
            };
            return response;
        }
    }

    async updateProduct(event, context, callback) {
        let response = {};
        try {
            const body = event.body;
            const validateSchema = new ajv().compile(updateProductSchema);
            if(validateSchema(body)) {
                let productService = new ProductService();
                let updateProduct = await productService.updateProduct(body);
                if(updateProduct) {
                    response = {
                        status: UPDATE_SUCCESS,
                        body: updateProduct
                    };
                } else {
                    response = {
                        status: INTERNAL_ERROR,
                        body: {
                            message: "Error updating the product"
                        }
                    };
                }
            } else {
                response = {
                    status: BAD_REQUEST
                };
            }
            return response;
        } catch (error) {
            response = {
                status: INTERNAL_ERROR
            };
            return response;
        }
    }

    async deleteProduct(event, context, callback) {
        let response = {};
        try {
            let idProduct = event.query.id;
            let productService = new ProductService();
            let deleteProduct = await productService.deleteProduct(idProduct);
            if(deleteProduct) {
                response = {
                    status: DELETE_SUCCESS,
                    body: deleteProduct
                }
            } else {
                response = {
                    status: INTERNAL_ERROR,
                    body: {
                        message: "Error deleting the product"
                    }
                }
            }
            return response;
        } catch (error) {
            response = {
                status: INTERNAL_ERROR
            };
            return response;
        }
    }

    async getProduct(event, context, callback) {
        let response = {};
        try {
            let idProduct = event.query.id;
            let productService = new ProductService();
            let product = await productService.getProduct(idProduct, callback);
            if(product) {
                response = {
                    status: SUCCESS_RESPONSE,
                    body: product
                }
            } else {
                response = {
                    status: INTERNAL_ERROR,
                    body: {
                        message: "Error getting the product"
                    }
                };
            }
            return response;
        } catch (error) {
            response = {
                status: INTERNAL_ERROR
            };
            return response;
        }
    }

}

module.exports = ProductController;