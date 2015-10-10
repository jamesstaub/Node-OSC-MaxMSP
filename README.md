# rubberhacks
tool for audience members to interact with a laptop performer using a realtime web app. 

##Web Client
realtime firebase app with interfaces for users to interact with
users on smarphones use to interact with performer

##Data Processing
Node js server that listens for firebase changes, and processes the data and sends it to Max/MSP on a local server


##Audio Generator 
(running on a single computer)
Max MSP  (or maybe something else like tone.js)
receives OSC data from Node server