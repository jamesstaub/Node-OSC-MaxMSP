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

// not sure if address arg is necessary
OscIO.prototype.receive = function (address, message, callback){
  oscServer.on('message', callback);
}


module.exports = new OscIO;
