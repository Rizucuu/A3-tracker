//import express package
const express = require('express');
//initialise the express framework
const app =express();
//serve static files from the public folder:
app.use(express.static('public'));
//Serve the index file for the root("/") path:
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html')
})
//Start the server, listening for incoming traffic and logging a message to the console:
let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
})

//Back in the terminal, run your server using the command: node server.js

//Open your web browser and put in the URL - http://localhost:8888

//To stop your server, press 'Control + C'

//start web server: npm run start