'use strict'

const aws = require('aws-sdk')
const DynamoDBValue = require('dynamodb-value');
const resolveCliInput = require('serverless/lib/utils/resolveCliInput');
const Constant = require('../../commons/Constants.js');

const fs = require('fs');

const {
    BAD_REQUEST,
    SUCCESS_RESPONSE,
    INTERNAL_ERROR,
    DELETE_SUCCESS,
    RESOURCE_NOT_FOUND
} = require('../../commons/Responses');

const productModel = require('../../models/productModel');

aws.config.update({ region: process.env.region });

class ProductDAO {

    constructor() {
        this.dynamodb = new aws.DynamoDB({ apiVersion: '2012-08-10' })
    }

    getProductFeature() {

        //Return with dynamoDB return this.dynamodb.scan(params).promise();
        const dataFeatured = require('../../commons/data/dataFeatured.json')
        const result = [];
        console.log(dataFeatured);
        dataFeatured.forEach((item)=>{
            //pushes only unique element
            let exist = (result.length ? result.find(element => item.id == element.id) : "");
            if(!exist){
                item.priceDiscount = (Number(item.price) - (Number(item.price) * Number(item.discount) / 100));
                result.push(item);
            }
        })
        return {Items: result};
    }

    createProduct(body) {
        let item = productModel(body);

        
        let data = require('../../commons/data/data.json')
        data.push(body);
        
        // The absolute path of the new file with its name
        var filepath = ".\\src\\commons\\data\\data.json";
        fs.writeFileSync(filepath, JSON.stringify(data)); 
        //Return create product dynamoDB return this.dynamodb.putItem(params).promise();
        return body;
    }

    updateProduct(body) {

        let data = require('../../commons/data/data.json')
        let product = data.find(item => item.id == body.id);
        let indexProduct = data.indexOf(product);
        data.splice(indexProduct, 1, body);
        var filepath = ".\\src\\commons\\data\\data.json";
        fs.writeFileSync(filepath, JSON.stringify(data)); 

        //Return update product dynamoDB return this.dynamodb.putItem(params).promise();
        return body;
    }

    async deleteProduct(idProduct) {

        let data = require('../../commons/data/data.json')
        let product = data.find(item => item.id == idProduct);
        let indexProduct = data.indexOf(product);

        data.splice(indexProduct, 1);
        var filepath = ".\\src\\commons\\data\\data.json";
        fs.writeFileSync(filepath, JSON.stringify(data)); 
        //Return delete product dynamoDB return this.dynamodb.deleteItem(params).promise();
        return product;
    }

    getProduct(idProduct) {
        const data = require('../../commons/data/data.json');
        let product = data.find(item => item.id == idProduct);
        let dataFeatured = require('../../commons/data/dataFeatured.json')
        dataFeatured.push(product)
        var filepath = ".\\src\\commons\\data\\dataFeatured.json";
        fs.writeFileSync(filepath, JSON.stringify(dataFeatured));
        //Return get  product dynamoDB return this.dynamodb.query(params).promise();
        return product;
    }

    getIdProduct() {
        const data = require('../../commons/data/data.json');
        return {Items: data};
    }

}

module.exports = ProductDAO;