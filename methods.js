var methods = {} // or var methods = module.exports = {}
                // methods.updateServer = function(){}
module.exports = {
    updateServer : function (ifThere) {
        console.log('Important function', ifThere);
    },
    eatCookies : function () {
        console.log('chocolate cookies');
    },
    rajesh: 'i am here!'
}
//module.exports.rajesh = 'i am here!';
//exports.data = methods; //if we extend our functions with module.exports no need of this.