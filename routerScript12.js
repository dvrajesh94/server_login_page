var express = require('express');
var app = express();
var router = express.Router();

app.use('/myFirstRoute', router);

router.get('/heyThereFirstRoute', function(req,res){ //this route is called when /myFirstRoute/heyThereFirstRoute is called because of the line:5
    res.end('what is happening!!') //if we use get instead of router the route will be triggered with /heyThereFirstRoute url
})

router.get('/heyThereFirstRouteAgain', function(req,res){
    res.end('what is happening!!, second route')
})

app.get('/', function(req,res){
    res.end('hey there!!');
})

app.listen('1337', function(){
    console.log('listening on port 1337');
})