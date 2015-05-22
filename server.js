var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var express = require('express');
var app = express();
var logger = require('morgan');

//Configuration
app.use(logger('combined'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));


// Routes
/*app.use('/public/css', express.static(path.join(__dirname, '/public/css')));
app.use('/public/js', express.static(path.join(__dirname, '/public/js')));
app.use('/public/images', express.static(path.join(__dirname, '/public/images')));*/
app.get('/',function(req, res){   
      res.sendFile(__dirname + '/public/views/index.html');
});

// Server
var httpServer = http.createServer(app);
httpServer.listen(3000);
console.log("Server is running on port 3000");