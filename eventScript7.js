var events = require('events');
var eventEmitter =  new events.EventEmitter();

eventEmitter.on('myCustomEvent', function(arg1, arg2){
   console.log('event fired!!!', arg1+arg2);
});

setTimeout(function(){
    eventEmitter.emit('myCustomEvent', 'string1', ' and string 2');
}, 2000)

// document.querySelector('yourTag').myCustomEvent = finction() {. ..}; //myCustomEvent could be onclick/onhover etc