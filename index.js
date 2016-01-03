
var express = require('express');
var server = express(); // better instead
server.configure(function(){
//  server.use('/media', express.static(__dirname + '/media'));
  server.use(express.static(__dirname + '/public'));
});

server.listen(process.env.PORT || 5000);