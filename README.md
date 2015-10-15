# Node OSC MaxMSP
connect MaxMSP to the web with a local Node server and a Firebase web app.
use to build tools for audience members to interact with a laptop performer via a realtime web app.


Node OSC library implementation is taken from [node-osc](https://github.com/TheAlphaNerd/node-osc)

##Web Client
realtime firebase app with interfaces for users to interact with
users on smarphones use to interact with performer

##Data Processing
Node js server that listens for firebase changes, and processes the data and sends it to Max/MSP on a local server


##Audio / Visual Generator
(running on a single computer)
Max MSP  (or maybe something else like tone.js)
receives OSC data from Node server
