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

var express = require('express'); // (npm install --save express)
const request = require('supertest');

describe('Create Product Test', function () {
    this.timeout(0);
    let server;
    describe('Success 201', function () {
        beforeEach(function () {
            server = require('../handler.js');
        });
        afterEach(function () {
            server.close();
        });
    
        it('handler status 201', (done) => {
            request(server)
            .post('/v1/store/products')
            .set('Content-Type', 'application/json')
            .send(rqSuccessCreate.body)
            .expect(200, function(err, res) {
                if (err) { return done(err); }
                expect(JSON.parse(res.text).status.statusCode).to.equal(201)
                // Done
                done();
            });
        });
    });
});

describe('Delete Product Test', function () {
    this.timeout(0);
    let server;
    describe('Success 201', function () {
        before((done) => {
            server = require('../handler.js');
            done();
        });
    
        it('handler status 201', (done) => {
            request(server)
            .delete('/v1/store/products')
            .set('Content-Type', 'application/json')
            .query(rqSuccessDelete.query)
            .expect(200, function(err, res) {
                if (err) { return done(err); }
                expect(JSON.parse(res.text).status.statusCode).to.equal(201)
                // Done
                done();
            });
        });
    
        after((done) => {
            server.close();
            done();
        });
    });
});

describe('Feature Product Test', function () {
    this.timeout(0);
    let server;
    describe('Success 201', function () {
        before((done) => {
            server = require('../handler.js');
            done();
        });
    
        it('handler status 201', (done) => {
            request(server)
            .get('/v1/store/products/feature')
            .set('Content-Type', 'application/json')
            .send(rqSuccessFeature)
            .expect(200, function(err, res) {
                if (err) { return done(err); }
                expect(JSON.parse(res.text).status.statusCode).to.equal(201)
                // Done
                done();
            });
        });
    
        after((done) => {
            server.close()
            done();
        });
    });
});

describe('Get Product Product Test', function () {
    this.timeout(0);
    let server;
    describe('Success 201', function () {
        before((done) => {
            server = require('../handler.js');
            done();
        });
    
        it('handler status 201', (done) => {
            request(server)
            .get('/v1/store/products')
            .set('Content-Type', 'application/json')
            .query(rqSuccessGetProduct.query)
            .expect(200, function(err, res) {
                if (err) { return done(err); }
                expect(JSON.parse(res.text).status.statusCode).to.equal(201)
                // Done
                done();
            });
        });
    
        after((done) => {
            server.close()
            done();
        });
    });
});

describe('Update Product Test', function () {
    this.timeout(0);
    let server;
    describe('Success 201', function () {
        before((done) => {
            server = require('../handler.js');
            done();
        });
    
        it('handler status 201', (done) => {
            request(server)
            .put('/v1/store/products')
            .set('Content-Type', 'application/json')
            .send(rqSuccessUpdate.body)
            .expect(200, function(err, res) {
                if (err) { return done(err); }
                expect(JSON.parse(res.text).status.statusCode).to.equal(201)
                // Done
                done();
            });
        });
    
        after((done) => {
            server.close()
            done();
        });
    });
})
