'use strict'

var mysql = require('mysql');

var connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: 'root',
        database: 'appstormdb'

});

connection.connect(function(err){

    if(err){
        console.log('error connection: ' + err.stack);
        return;
    }
    console.log('connected as id: ' + connection.threadId);
});


module.exports = connection;