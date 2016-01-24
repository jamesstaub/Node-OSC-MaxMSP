# Node OSC MaxMSP
connect MaxMSP to the web with a local Node server and a Firebase client app.
use to build tools for audience members to interact with a laptop performer via a realtime web app.


Node OSC library implementation is taken from [node-osc](https://github.com/TheAlphaNerd/node-osc)

##Client app
realtime firebase app with interfaces for users to interact with
with performer or installation

1. create a new firebase app
2. replace firebase references in client_app/js/app.js with your app's address
3. deploy to firebase


##Data Processing
Node js server that listens for firebase changes, and processes the data and sends it to Max/MSP on a local server

1. add amazon s3 bucket access key and secret key to your .bash_profile
3. update firebase references in index.js
2. run node index.js




##Audio / Visual Generator
(running on a single computer)

1. open index.maxpat in Max/MSP to listen for OSC messages
2. with the client app deployed to firebase, and the node server running, the cline app's slider inputs will send their values into max msp.

3. image_printer.maxpat generates graphics, and exports them as jpeg which are then uploaded to amazon S3, and served to the firebase app.




