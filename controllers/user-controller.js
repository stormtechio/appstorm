'use strict'

const mysql = require('mysql');
const dbConnection = require('../connection');


exports.get = (req, res, next) =>{

    var sql = "SELECT * FROM user";

    dbConnection.query(sql, function(err, result, fields){
        if(err) throw err;
    console.log(result);
    });
}
// exports.put = (req, res, next) =>{

//     var sql = "INSERT INTO user (name, email, password) VALUES ('Ayrton', 'ayrton@gmail', 'ayrton')";

//     dbConnection.query(sql, function(err, result){
//         if(err) throw err;
//     console.log("Usuário Inserido");
//     });
// }
exports.post = (req, res, next) =>{

    var data = req.body;
    console.log(data);
    var sql = 'INSERT INTO user SET ?';

    dbConnection.query(sql,data,function(err, rows, fields){
        if(err) throw err;
    console.log("Usuário Inserido");
    });
}