
const http = require('http');
const express = require('express');
const app = express();
const index = require('./src/index.js');
const data = require('./src/commons/data/data.json');

app.get('/', (req, res) => {
    res.send({});
});

app.get('/v1/store/products/feature',async function (req, res) {
    let response = await index.productsFeatureHandler()
    console.log("Response: ", response)
    res.json(response);
/*
    .then((result) => {
        console.log(result);
        
    })
    .catch((error) => {
        res.json(error)
    });
*/
});

app.get('/v1/store/products', (req, res) => {
    index.getProductHanlder(req)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.json(error)
    })
});

app.delete('/v1/store/products', (req, res) => {
    index.deleteProductHandler(req)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.json(error)
    })
});

app.put('/v1/store/products', (req, res) => {
    index.updateProductHandler(req)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.json(error)
    })
});

app.post('/v1/store/products', (req, res) => {
    index.createProductHandler(req)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.json(error)
    })
});

const port = 3001;
app.listen(port);
console.log(`Runing port ${port}`);