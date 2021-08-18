'use strict';

const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const router = express.Router();

const connectiondb = require('./connection');

const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
const productRoute = require('./routes/product-route')

//autenticação
const session = require('express-session')
const flash = require('connect-flash')

//autenticação
const passport = require('passport')
require('./config/auth')(passport)


app.use(session({

secret:"appstorm",
resave:true,
saveUninitialized:true
}))


app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use((req, res, next)=>{
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next()
})
//autenticaçao

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/products', productRoute);

module.exports = app;