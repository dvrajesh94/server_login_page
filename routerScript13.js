var express = require('express');
var app = express();
var router = express.Router();

app.use('/users', router);

router.get('/:username(\\w+)', function(req,res){ // ':' -> regex to accept anything from url...
    res.end(JSON.stringify(req.params)) // '\\w+' ->  regex to not to accept any special characters...
})
// router.get('/:userFirstName/:userLastName', function(req,res){ // ':' -> regex to accept anything from url...
//    res.end(JSON.stringify(req.params)) // if you re mentioning 2 parameters then 2 should be given for sure...
//})

app.listen('1337', function(){
    console.log('listening on port 1337');
})