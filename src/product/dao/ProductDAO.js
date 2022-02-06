'use strict'

const aws = require('aws-sdk')
const DynamoDBValue = require('dynamodb-value');
const loggerHandler = require('scg-ms-logs-node');
const resolveCliInput = require('serverless/lib/utils/resolveCliInput');
const Constant = require('../../commons/Constants.js');
const {
    BAD_REQUEST,
    SUCCESS_RESPONSE,
    INTERNAL_ERROR,
    DELETE_SUCCESS,
    RESOURCE_NOT_FOUND
} = require('../../commons/Responses');

const productModel = require('../../models/productModel');

aws.config.update({ region: process.env.region });
loggerHandler.getLogger(__filename);

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

        return this.dynamodb.scan(params).promise();
    }

    createProduct(body) {
        let item = productModel(body);
        let params = {
            Item: DynamoDBValue.toDDB(item),
            TableName: Constant.DYNAMODB.TABLE_NAME_PRODUCTS
        }

        return this.dynamodb.putItem(params).promise();
    }

    updateProduct(body) {
        let params = {
            Item: DynamoDBValue.toDDB(productModel(body)),
            TableName: Constant.DYNAMODB.TABLE_NAME_PRODUCTS
        }

        return this.dynamodb.putItem(params).promise();
    }

    deleteProduct(idProduct) {
        let params = {}
        params.TableName = Constant.DYNAMODB.TABLE_NAME_PRODUCTS;
        params.Key = DynamoDBValue.toDDB({ id: idProduct });
        params.ReturnValues = "ALL_OLD"

        return this.dynamodb.deleteItem(params).promise();
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

        return this.dynamodb.query(params).promise();
    }

    getIdProduct() {
        let params = {
            TableName: Constant.DYNAMODB.TABLE_NAME_PRODUCTS
        }

        return this.dynamodb.scan(params).promise();
    }

}

module.exports = ProductDAO;