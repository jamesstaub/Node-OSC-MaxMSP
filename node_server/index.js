var http = require('http');
var httpPort = 8080;
var oscIO = require('./oscIO');
var Firebase = require("firebase");
var firebaseOSC = new Firebase('https://rubberhacks.firebaseio.com/');
var sliders;

// http server
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(httpPort, function(){
    //Callback triggered when server is successfully listening.
    console.log("Server listening on: http://localhost:%s", httpPort);
});

firebaseOSC.on("value", function(snapshot) {
  sliders = snapshot.val();
  oscIO.send('a', Number(sliders.a));
  oscIO.send('b', Number(sliders.b));
  oscIO.send('c', Number(sliders.c));
  oscIO.send('d', Number(sliders.d));
});

