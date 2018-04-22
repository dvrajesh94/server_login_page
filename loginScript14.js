var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');
var app = express();

var session;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(sessions({
    secret: '*&^^^%$#$#@(#$%^&*^',
    resave: false, //https://www.npmjs.com/package/express-session#resave
    saveUninitialized: true //https://www.npmjs.com/package/express-session#saveuninitialized
}))

app.get('/login', function(req, res){
    session = req.session;
    if(session.uniqueId){
        res.redirect('/redirects')
    }
    res.sendFile('./files/login.html', {root: __dirname})
    //res.end(JSON.stringify(req.query));
})

app.post('/login', function(req, res){
    //res.end(JSON.stringify(req.body));
    session = req.session;
    if(session.uniqueId){
        res.redirect('/redirects')
    }
    if(req.body.username == 'admin' && req.body.password == 'admin'){// instead of this check we basically check it from the database
        session.uniqueId = req.body.username; // this is stored in session in order to keep the user logged in
    }
    res.redirect('/redirects');
})

app.get('/logout', function(req,res){
    req.session.destroy(function(error){
        console.log('error', error);
        res.redirect('/login');
    })
})

app.get('/redirects', function(req, res){
    session = req.session;
    if(session.uniqueId) {
        res.redirect('/admin');
    }
    else {
        res.send('<a href="/logout">If not you, Please click here!</a>');
    }
})

app.get('/admin', function(req, res){
    res.end('<a href="/login">You are in the admin page</a>')// this on click will not redirect to login page since
    // the session is not destroyed and to know why this stays in same page see the flow of code from here
})

app.listen(1337, function(){
    console.log("listening at port 1337");
});