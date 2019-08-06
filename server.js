'use strict'


const http = require('http');
const debug = require('debug')('appstorm:server');
const express = require('express');
const connectiondb = require('./connection');

const app = express();
const port = 5000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();


server.listen(port);
console.log('Rodando na porta: ' + port);