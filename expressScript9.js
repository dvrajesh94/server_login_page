var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets')); // to use local files from node(css in our case)

app.get('/', function(req, res){
    res.sendFile('index.html', {root: path.join(__dirname, './files')})
})

app.get(/^(.+)$/, function(req, res){
    console.log('req.params', req.params)
    try {
        if(fs.statSync(path.join(__dirname, './files', req.params[0]+'.html')).isFile()){
            res.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './files')})
        }
    } catch(err){
        res.sendFile('404.html', {root: path.join(__dirname, './files')})
    }

})

app.listen(1337, function(){
    console.log("listening at port 1337");
});