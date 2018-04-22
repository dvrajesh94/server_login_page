module.exports = {
    currentUrl: 'http://www.google.com'
}
//function construct_funct() { // this method is used to get rid og javascript's object reference issue.
//    var nameHolder;           // say a = {key:value}; b=a; b.key = value1; now a.key shows value1 not value.
//    return{
//        name: function(fName, lName){
//            return nameHolder = fName+' '+lName;
//        }
//        consoleLog: function(){
//            console.log('name', nameHolder);
//        }
//    }
//}
//module.exports = construct_funct;