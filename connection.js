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

    var sql = "INSERT INTO user (name, email, password) VALUES ('Saori', 'saoricosta@gmail', 'sassa')";
    connection.query(sql, function(err, result){
            if(err) throw err;
        console.log("Inserted!!!");
    });
});