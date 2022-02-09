const createProductHandler = require('../src/index').createProductHandler;
const deleteProductHandler = require('../src/index').deleteProductHandler;
const getProductHanlder = require('../src/index').getProductHanlder;
const productsFeatureHandler = require('../src/index').productsFeatureHandler;
const updateProductHandler = require('../src/index').updateProductHandler;
const Constants = require('../src/commons/Constants.js');

const expect = require('chai').expect;
const should = require('chai').should();
const AWS = require('aws-sdk-mock');
var api = require('api-stub');

//EVENT SUCCESS
const rqSuccessCreate = require('./events/success/rqSuccessCreate.json');
const rqSuccessDelete = require('./events/success/rqSuccessDelete.json');
const rqSuccessFeature = require('./events/success/rqSuccessFeature.json');
const rqSuccessGetProduct = require('./events/success/rqSuccessGetProduct.json');
const rqSuccessUpdate = require('./events/success/rqSuccessUpdate.json');
//EVENT FAIL

//MOCKS-DYNAMODB
const mockSuccessCreate = require('./mocks/DynamoDB/mockSuccessCreate.json');
const mockSuccessGetIdProduct = require('./mocks/DynamoDB/mockSuccessGetIdProduct.json');
const mockSuccessGetProduct = require('./mocks/DynamoDB/mockSuccessGetProduct.json');
const mockSuccessUpdate = require('./mocks/DynamoDB/mockSuccessUpdate.json');
const mockSuccessFeature = require('./mocks/DynamoDB/mockSuccessFeature.json');
const mockSuccessDelete = require('./mocks/DynamoDB/mockSuccessDelete.json');


describe('Create Product Test', function () {
    this.timeout(0);

    describe('Success 201', function () {
        before((done) => {

            AWS.mock("DynamoDB", "putItem", function (params, callback) {
                if(params.TableName == Constants.DYNAMODB.TABLE_NAME_PRODUCTS) {
                    callback(null, mockSuccessCreate);
                }
            });
            AWS.mock("DynamoDB", "scan", function (params, callback) {
                if(params.TableName == Constants.DYNAMODB.TABLE_NAME_PRODUCTS) {
                    callback(null, mockSuccessGetIdProduct);
                }
            });
            done();
        });
    
        it('handler status 201', (done) => {
            createProductHandler(rqSuccessCreate, {}, function (error, response) {
                try {
                    should.exist(response);
                    expect(response.status.statusCode).to.equal(201);
                    done();
                } catch (error) {
                    done(error);
                }
                
            })
        });
    
        after((done) => {
            AWS.restore("DynamoDB");
            done();
        });
    });
});

describe('Delete Product Test', function () {
    this.timeout(0);

    describe('Success 201', function () {
        before((done) => {

            AWS.mock("DynamoDB", "deleteItem", function (params, callback) {
                if(params.TableName == Constants.DYNAMODB.TABLE_NAME_PRODUCTS) {
                    callback(null, mockSuccessDelete);
                }
            });
            done();
        });
    
        it('handler status 201', (done) => {
            deleteProductHandler(rqSuccessDelete, {}, function (error, response) {
                try {
                    should.exist(response);
                    expect(response.status.statusCode).to.equal(201);
                    done();
                } catch (error) {
                    done(error);
                }
                
            })
        });
    
        after((done) => {
            AWS.restore("DynamoDB");
            done();
        });
    });
});

describe('Feature Product Test', function () {
    this.timeout(0);

    describe('Success 201', function () {
        before((done) => {

            AWS.mock("DynamoDB", "scan", function (params, callback) {
                if(params.TableName == Constants.DYNAMODB.TABLE_NAME_PRODUCTS) {
                    callback(null, mockSuccessFeature);
                }
            });
            done();
        });
    
        it('handler status 201', (done) => {
            productsFeatureHandler(rqSuccessFeature, {}, function (error, response) {
                try {
                    should.exist(response);
                    expect(response.status.statusCode).to.equal(201);
                    done();
                } catch (error) {
                    done(error);
                }
                
            })
        });
    
        after((done) => {
            AWS.restore("DynamoDB");
            done();
        });
    });
});

describe('Get Product Product Test', function () {
    this.timeout(0);

    describe('Success 201', function () {
        before((done) => {

            AWS.mock("DynamoDB", "query", function (params, callback) {
                if(params.TableName == Constants.DYNAMODB.TABLE_NAME_PRODUCTS) {
                    callback(null, mockSuccessGetProduct);
                }
            });
            done();
        });
    
        it('handler status 201', (done) => {
            getProductHanlder(rqSuccessGetProduct, {}, function (error, response) {
                try {
                    should.exist(response);
                    expect(response.status.statusCode).to.equal(201);
                    done();
                } catch (error) {
                    done(error);
                }
                
            })
        });
    
        after((done) => {
            AWS.restore("DynamoDB");
            done();
        });
    });
});

describe('Update Product Test', function () {
    this.timeout(0);

    describe('Success 201', function () {
        before((done) => {

            AWS.mock("DynamoDB", "putItem", function (params, callback) {
                if(params.TableName == Constants.DYNAMODB.TABLE_NAME_PRODUCTS) {
                    callback(null, mockSuccessUpdate);
                }
            });
            done();
        });
    
        it('handler status 201', (done) => {
            updateProductHandler(rqSuccessUpdate, {}, function (error, response) {
                try {
                    should.exist(response);
                    expect(response.status.statusCode).to.equal(201);
                    done();
                } catch (error) {
                    done(error);
                }
                
            })
        });
    
        after((done) => {
            AWS.restore("DynamoDB");
            done();
        });
    });
});
