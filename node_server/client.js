'use strict';
var osc = require('./lib');
var client = new osc.Client('127.0.0.1', 3333);

// client.send('/a', 1, function (err) {
//   client.kill();
// });
function randList(){
	var routes = ['/a', '/b', '/c', '/d'];

	routes.map(function(e){
		var rand = Math.random();
		console.log(rand);
		clientSend(e, rand);
	});
}

function clientSend(route, message){
	client.send(route, message, function (err) {
	  client.kill();
	});
}


randList();

// var msg =  new osc.Message('/oscAddress');
// msg.append("testing");
// msg.append("testing");
// msg.append(123);
// client.send(msg)

// or
// var msg = new osc.Message('/address', 1, 2, 3);
// client.send(msg);
