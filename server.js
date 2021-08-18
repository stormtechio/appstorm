'use strict'

const app = require('./app');


const http = require('http');
const debug = require('debug')('appstorm:server');

const port = 5000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log('Rodando na porta: ' + port);


