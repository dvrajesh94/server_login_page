var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
    //res.cookie('myFirstCookie', 'looks Good', { }) //the third parameter is used to give options(when we sign in, the browser asks keep me signed in)
    //res.cookie(name, 'value', {expire: 360000 + Date.now()}); // provides absolute time in ms.
    //res.cookie(name, 'value', {maxAge: 360000}); // provides relative time in ms.
    res.cookie('myFirstCookie', 'looks Good');
    res.end('wow');
})
app.get('/removeCookie', function(req, res){
    //res.cookie('myFirstCookie', 'looks Good', { }) //the third parameter is used to give options(when we sign in, the browser asks keep me signed in)
    res.clearCookie('myFirstCookie');
    res.end('wow');
})

app.listen(1337, function() {
    console.log('Listening On Port 1337');
})