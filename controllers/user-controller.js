'use strict'

const mysql = require('mysql');
const dbConnection = require('../connection');
const passport = require('passport')

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

    var idUser = Number(req.body.id);
    var dataUser = req.body;
    console.log(dataUser);
    var sql = "UPDATE user SET ? WHERE id = ?";

    dbConnection.query(sql, [dataUser,idUser],function(err, result){
        if(err) res.send({'error':err})
    console.log("Usuário atualizado com sucesso!");
    res.send({'message':'sucesso ao atualizar'});
        
    
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

exports.postLogin = (req, res, next) =>{
  
    passport.authenticate("local",{
        successRedirect: "/",
        failureRedirect:"/login",
        failureFlash: true
    })(req, res, next)
   

}

exports.getLogin = (req, res) =>{

res.render("users/login")
   

}


// exports.post = (req, res, next) =>{


//     passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   }
   

// }

