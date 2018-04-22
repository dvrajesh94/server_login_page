var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

app.use('/cssFiles', express.static(__dirname + '/assets')); // to use local files from node(css in our case)

app.get('/', function(req, res){
    res.sendFile('index.html', {root: path.join(__dirname, './files')})
    //res.end(JSON.stringify(req.query));
})

app.post('/', function(req, res){
    //res.end(JSON.stringify(req.query));
    // body-parser middleware is required to work with the post response
    res.end(JSON.stringify(req.body));
})


app.listen(1337, function(){
    console.log("listening at port 1337");
});