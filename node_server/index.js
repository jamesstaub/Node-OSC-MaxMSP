var http = require('http');

var httpPort = 8080;
var oscIO = require('./oscIO');
var Firebase = require("firebase");
var firebaseOSC = new Firebase('https://rubberhacks.firebaseio.com/');

// send image
var streamingS3 = require('streaming-s3'),
    fs = require('fs');




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
  fbResponse = snapshot.val();
  for (var uid in fbResponse) {
    // var userIndex = uidToInt(uid);
    var userData = fbResponse[uid];

    for(var slider in userData){
      // oscIO.send(userIndex[uid], Number(userData[slider]));

      oscIO.send(String(uid), [slider, Number(userData[slider])]);
    }
  }
});

var userIndexes = {};

function uidToInt(uid, userIndexeObj) {
   //convert firbase user ids into a hash of numeric indexes
  // userIndexes[uid] = true;
  if (userIndexes.hasOwnProperty(uid)) {
  }
  for (var user in userIndexes) {
    // userIndexes[user] = count;
    // count ++;
  }
  return userIndexes;

}


var fStream = fs.CreateReadStream( './clips/capture.mov');
console.log('fstream' fStream);

var uploader = new streamingS3(fStream, {accessKeyId: 'accessKey', secretAccessKey: 'secretKey'},
  {
    Bucket: 'example.streaming-s3.com',
    Key: 'video.mp4',
    ContentType: 'video/mp4'
  },  function (err, resp, stats) {
  if (err) return console.log('Upload error: ', e);
  console.log('Upload stats: ', stats);
  console.log('Upload successful: ', resp);
  }
);
