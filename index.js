
var express = require('express');
//var server = express.createServer();
var server = express(); // better instead

  //server.use('/media', express.static(__dirname + '/media'));
  server.use(express.static(__dirname + '/public'));


server.listen(process.env.PORT || 5000);