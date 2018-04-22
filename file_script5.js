var fs = require('fs');

console.log('executed before file reading!!')

fs.readFile('./files/file', 'utf8', function(error, data){
    console.log('data:', data);
})
//var rf = fs.readFileSync('./files/file', 'utf8'); //--this is to execute the readFile code in a synchronous fashion.
//console.log(rf)
console.log('may be executed after file reading!!') // due to asynchronous this console will occue first if readfile takes time.