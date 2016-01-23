'use strict';
var osc = require('./lib');
var oscClient = new osc.Client('127.0.0.1', 3333);
var oscServer = new osc.Server(3334, '0.0.0.0');

var OscIO = function() {};

OscIO.prototype.send = function (address, message){
  oscClient.send(address, message, function (err) {
    // oscClient.kill();
  })
}

OscIO.prototype.receive = function (address, message){
  oscServer.on('message', function (message) {
    console.log('Message:');
    console.log(msg);
  });
}


module.exports = new OscIO;
