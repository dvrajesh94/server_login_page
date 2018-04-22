var fs = require('fs');

console.log('executed before file reading!!')

fs.writeFile('./files/writtenFile', 'Hello kakarot this is my file, at last i am the prince of all saiyans!!!!!!','utf8', function(error, data){
    if(error) throw error;
    console.log('file written');
})
//var rf = fs.writeFileSync('./files/file', 'heya this is the text to go to file!!!!!   ','utf8'); //--this is to execute the readFile code in a synchronous fashion.
//console.log(rf)
console.log('may be executed after file reading!!') // due to asynchronous this console will occue first if readfile takes time.