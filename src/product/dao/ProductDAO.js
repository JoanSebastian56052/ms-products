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

        let params = {}
        params.TableName = Constant.DYNAMODB.TABLE_NAME_PRODUCTS;
        params.ProjectionExpression = "#feature";
        params.FilterExpression = "#feature = :f";
        params.ExpressionAttributeNames = {
            "#feature": "feature"
        };
        params.ExpressionAttributeValues = {
            ":f": {BOOL: true}
        };

        //Return with dynamoDB return this.dynamodb.scan(params).promise();
        return data;
    }

    createProduct(body) {
        let item = productModel(body);
        let params = {
            Item: DynamoDBValue.toDDB(item),
            TableName: Constant.DYNAMODB.TABLE_NAME_PRODUCTS
        }

        const data = require('../../commons/data/data.json')
        data.push(body);
        fs.writeFileSync('../../commons/data/data.json', data);

        //Return create product dynamoDB return this.dynamodb.putItem(params).promise();
        return body;
    }

    updateProduct(body) {
        let params = {
            Item: DynamoDBValue.toDDB(productModel(body)),
            TableName: Constant.DYNAMODB.TABLE_NAME_PRODUCTS
        }

        const data = require('../../commons/data/data.json')

        let indexProduct = data.indexOf(item => item.id == idProduct);
        data.slice(indexProduct, 1, body);
        fs.writeFileSync('../../commons/data/data.json', data);

        //Return update product dynamoDB return this.dynamodb.putItem(params).promise();
        return body;
    }

    deleteProduct(idProduct) {
        let params = {}
        params.TableName = Constant.DYNAMODB.TABLE_NAME_PRODUCTS;
        params.Key = DynamoDBValue.toDDB({ id: idProduct });
        params.ReturnValues = "ALL_OLD"

        const data = require('../../commons/data/data.json')
        let product = data.find(item => item.id == idProduct);
        let indexProduct = data.indexOf(item => item.id == idProduct);

        data.slice(indexProduct, 1);
        fs.writeFileSync('../../commons/data/data.json', data);
        //Return delete product dynamoDB return this.dynamodb.deleteItem(params).promise();
        return product;
    }

    getProduct(idProduct) {
        let params = {}
        params.TableName = Constant.DYNAMODB.TABLE_NAME_PRODUCTS;
        params.ProjectionExpression = "#id";
        params.FilterExpression = "#id = :id";
        params.ExpressionAttributeNames = {
            "#id": "id"
        };
        params.ExpressionAttributeValues = {
            ":id": {"N": idProduct.toString()}
        };

        const data = require('../../commons/data/data.json');
        //Return get  product dynamoDB return this.dynamodb.query(params).promise();
        return data.find(item => item.id == idProduct);
    }

    getIdProduct() {
        /* Return scan dynamoDB
        let params = {
            TableName: Constant.DYNAMODB.TABLE_NAME_PRODUCTS
        }

        return this.dynamodb.scan(params).promise();*/
        const data = require('../../commons/data/data.json');
        return {Items: data};
    }

}

module.exports = ProductDAO;