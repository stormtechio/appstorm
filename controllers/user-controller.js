'use strict'

const mysql = require('mysql');
const dbConnection = require('../connection');


exports.get = (req, res, next) =>{

    var sql = "SELECT * FROM user";

    dbConnection.query(sql, function(err, result, fields){
        if(err) throw err;
    console.log(result);
    res.send(result);
    });
}

exports.post = (req, res, next) =>{

    var dataUser = req.body;
    
    var sql = 'INSERT INTO user SET ?';

    dbConnection.query(sql,dataUser,function(err, result, fields){
        if(err) throw err;
    console.log("Usuário inserido com sucesso!");
    });
}

exports.put = (req, res, next) =>{

    var idUser = req.params.id;
    var dataUser = req.body;
    var sql = "UPDATE user SET ? WHERE id=?";

    dbConnection.query(sql, [dataUser,idUser],function(err, result){
        if(err) throw err;
    console.log("Usuário atualizado com sucesso!");
    });
}

exports.delete = (req, res, next) =>{
 
    var idUser = req.params.id;
    var sql = "DELETE FROM user WHERE id=?";

    dbConnection.query(sql, idUser,function(err, result, fields){
        if(err) throw err;
    console.log("Usuário excluído com sucesso!");
    });
}