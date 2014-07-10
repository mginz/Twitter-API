var fs = require('fs'),
    http = require ('http'),
    url = require('url'),
    port = 8888,
    piridon = require('./indexsecure.js');
	
var server = http.createServer( function (request, response){
	        
  	response.writeHead(200, {'Content-type': 'JSON'});

	response.end(piridon())
})

server.listen(port);
