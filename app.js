'use strict';

const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const router = express.Router();

const connectiondb = require('./connection');

const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
const productRoute = require('./routes/product-route')

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/products', productRoute);

module.exports = app;