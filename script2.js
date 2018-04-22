var http = require('http');
var server = http.createServer(engine)

server.listen(1337, function(){
    console.log('Listening on port 1337');
});

function engine(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain','custom-Header': 'Vegeta!!!!'}); //we can also give custom header types
    response.end('Hey Goku,Vegeta!!!'+ request.url);
}