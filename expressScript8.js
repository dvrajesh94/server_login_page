var express = require('express');
var app = express();

console.log(__dirname);

//app.use('/cssFiles', express.static(__dirname + '/assets')); // to use local files from node(css in our case)
// http://localhost:1337/cssFiles -- above line shows this way in browser.
app.get('/helloThere', function(request, response){
    response.send('heya kakarot!! How are you.');
});

app.listen(1337, function(){
    console.log("listening at port 1337");
});

