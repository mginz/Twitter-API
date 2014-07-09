var fs = require('fs')
var http = require ('http');
var url = require('url')
var index = require('./indexsecure.js')
var port = 8888
var piridon = require('./indexsecure.js')
var michael = fs.readFileSync('htmlnew.html')

var server = http.createServer( function (request, response){
	//var url_parts = url.parse(request.url, true)
	//if(url_parts.pathname == '/form'){

  //fs.readFile('./htmlnew.html', function(err, picture) {
            
  response.writeHead(200, {'Content-type': 'JSON'});
  	
	response.end(JSON.stringify(piridon()))

  //response.write(data, utf8);
  //response.end(michael);
//piridon()
});
//})

server.listen(port);