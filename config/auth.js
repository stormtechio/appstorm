
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');
const dbConnection = require('../connection');


module.exports = function(passport){

    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });

   
    passport.deserializeUser(function(id, done) {
		dbConnection.query("SELECT * FROM user WHERE id = ? ",[id],function(err,rows){	
			done(err, rows[0]);
		});
    });

    passport.use('local', new LocalStrategy({
       
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    },
    function(req, email, password, done) { 

        dbConnection.query("SELECT * FROM user WHERE email = ?",[email],function(err,rows){
            
            if (err)
                return done(err);
			 if (!rows.length) {
               
               return done(null, false, req.flash('loginMessage', 'No user found.'));
            } 
			
            if (!( rows[0].password == password))
                
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); 
           
            console.log(rows[0])
            return done(null, rows[0]);			
            
		});
		


}));
}