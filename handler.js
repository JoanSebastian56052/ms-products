
const http = require('http');
const express = require('express');
const app = express();
const index = require('./src/index.js');
const data = require('./src/commons/data/data.json');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send({});
});

app.get('/v1/store/products/feature', async function (req, res) {
    let response = await index.productsFeatureHandler();
    res.json(response);
});

app.get('/v1/store/products', async (req, res) => {
    let response = await index.getProductHanlder(req);
    res.json(response);
});

app.delete('/v1/store/products', async (req, res) => {
    let response = await index.deleteProductHandler(req);
    res.json(response);
});

app.put('/v1/store/products',async (req, res) => {
    let response = await index.updateProductHandler(req);
    res.json(response);
});

app.post('/v1/store/products',async (req, res) => {
    let response = await index.createProductHandler(req)
    res.json(response);
});

const port = 3001;
app.listen(port);
console.log(`Runing port ${port}`);