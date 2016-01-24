'use strict';
var http = require('http');
var httpPort = 8080;

var Firebase = require("firebase");
var firebaseOSC = new Firebase('https://rubberhacks.firebaseio.com/');

var oscIO = require('./oscIO');

// amazon s3 bucket
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
  var fbResponse = snapshot.val();
  for (var uid in fbResponse) {
    // var userIndex = uidToInt(uid);
    var userData = fbResponse[uid];

    for(var slider in userData){
      // oscIO.send(userIndex[uid], Number(userData[slider]));
      oscIO.send(String(uid), [slider, Number(userData[slider])]);
    }
  }
});

// var userIndexes = {};

// function uidToInt(uid, userIndexeObj) {
//    //convert firbase user ids into a hash of numeric indexes
//   // userIndexes[uid] = true;
//   if (userIndexes.hasOwnProperty(uid)) {
//   }
//   for (var user in userIndexes) {
//     // userIndexes[user] = count;
//     // count ++;
//   }
//   return userIndexes;
// }

// amazon s3 bucket
var fStream = fs.createReadStream(  __dirname+'/../media/img.jpg');

const accessKey = process.env.S3_ACCESS_KEY;
const secret = process.env.S3_SECRET;

var uploader = new streamingS3(fStream, {
  accessKeyId: accessKey,
  secretAccessKey: secret},
  {
    Bucket: 'nodeoscjitter',
    Key: 'img.jpg',
    ContentType: 'image/jpeg'
  },  function (err, resp, stats) {
  if (err) return console.log('Upload error: ', err);
  console.log('Upload stats: ', stats);
  console.log('Upload successful: ', resp);
  }
);
