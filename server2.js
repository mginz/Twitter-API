var fs = require('fs')
var http = require ('http');
var url = require('url')
var port = 8888
var piridon = require('./indexsecure.js')
//var michael = fs.readFileSync('htmlnew.html')

var server = http.createServer( function (request, response){
	//var url_parts = url.parse(request.url, true)
	//if(url_parts.pathname == '/form'){

  //fs.readFile('./htmlnew.html', function(err, picture) {
            
  	response.writeHead(200, {'Content-type': 'JSON'});
  	//response.write()
	response.end(piridon())

	

})
//piridon()
//});
//})

server.listen(port);
/*
fs.readFile('jsondata.json', function read(err, data) {
            if (err) {
                throw err;
            }

fs.appendFile('jsondata.json', JSON.stringify(piridon()), function(err){
		if (err) throw err;
		console.log('appended');
	})/*