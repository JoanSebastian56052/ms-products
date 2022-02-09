'use strict'
const DynamoDBValue = require('dynamodb-value');
const resolveCliInput = require('serverless/lib/utils/resolveCliInput');

const {
    BAD_REQUEST,
    SUCCESS_RESPONSE,
    INTERNAL_ERROR,
    DELETE_SUCCESS,
    RESOURCE_NOT_FOUND
} = require('../../commons/Responses');
const productModel = require('../../models/productModel');
const ProductDAO = require('../dao/ProductDAO');
const Constants = require('../../commons/Constants');

class ProductService {

    constructor() {}

    async getProductFeature() {
        let response = {};
        try {
            let productDAO = new ProductDAO();
            let listItems = await productDAO.getProductFeature();
            let itemsFeature = [];

            listItems.Items.forEach(element => {
                const item = element;
                if(item.feature) {
                    itemsFeature.push(item);
                }
            })
            return itemsFeature;
        } catch (error) {
            response = {
                status: INTERNAL_ERROR,
                error: error
            };
            throw response;
        }
    }

    async createProduct(body) {
        let response = {};
        try {
            let productDAO = new ProductDAO();
            let listItems = await productDAO.getIdProduct();
            let item = body;
            let isValidDiscount = this.validateDiscount(item);
            if(isValidDiscount) {
                item.id = (listItems.Count ? listItems.Count : listItems.length);
                let product = productModel(item);
                return await productDAO.createProduct(product);
            } else {
                return {}
            }
        } catch (error) {
            response = {
                status: INTERNAL_ERROR,
                error: error
            };
            throw response;
        }
    }

    async updateProduct(body) {
        let response = {};
        try {
            let productDAO = new ProductDAO();
            return await productDAO.updateProduct(body);
        } catch (error) {
            response = {
                status: INTERNAL_ERROR,
                error: error
            };
            throw response;
        }
    }

    async deleteProduct(idProduct) {
        let response = {};
        try {
            let productDAO = new ProductDAO();
            return await productDAO.deleteProduct(idProduct);
        } catch (error) {
            response = {
                status: INTERNAL_ERROR,
                error: error
            };
            throw response;
        }
    }

    async getProduct(idProduct) {
        let response = {};
        try {
            let productDAO = new ProductDAO();
            return await productDAO.getProduct(Number(idProduct));
        } catch (error) {
            response = {
                status: INTERNAL_ERROR,
                error: error
            };
            throw response;
        }
    }

    validateDiscount(item) {
        if(Constants.COUNTRY.HIGH_DISCOUNT.indexOf(item.countrySale.toUpperCase()) && Constants.DISCOUNTS.HIGH >= Number(item.priceDiscount)) {
            return true;
        }
        if(Constants.COUNTRY.LOW_DISCOUNT.indexOf(item.countrySale.toUpperCase()) && Constants.DISCOUNTS.LOW >= Number(item.priceDiscount)) {
            return true;
        }
        return false;
    }

}

module.exports = ProductService;