'use strict'

const mysql = require('mysql');
const dbConnection = require('../connection');


exports.get = (req, res, next) =>{

    var sql = "SELECT * FROM product";

    dbConnection.query(sql, function(err, result, fields){
        if(err) throw err;
    console.log(result);
    res.send(result);
    });
}

exports.post = (req, res, next) =>{

    var dataProduct = req.body;
    
    var sql = 'INSERT INTO product SET ?';

    dbConnection.query(sql,dataProduct,function(err, result, fields){
        if(err) throw err;
    console.log("Produto inserido com sucesso!");
    });
}

exports.put = (req, res, next) =>{

    var idProduct = req.params.id;
    var dataProduct = req.body;
    var sql = "UPDATE product SET ? WHERE id=?";

    dbConnection.query(sql, [dataProduct,idProduct],function(err, result){
        if(err) throw err;
    console.log("Produto atualizado com sucesso!");
    });
}

exports.delete = (req, res, next) =>{
 
    var idProduct = req.params.id;
    var sql = "DELETE FROM product WHERE id=?";

    dbConnection.query(sql, idProduct,function(err, result, fields){
        if(err) throw err;
    console.log("Produto excluído com sucesso!");
    });
}