function piri (){


	var http = require("http");
	var Twit = require('twit')
	var keystore = require ('./keystore.js')

	var T = new Twit (keys);
	T.get('search/tweets', { q: '#foundersandcoders since:2014-01-01', count:   100} , function(err, data, response) {
		console.log(data);

	//console.log(data); 
	        
	});
}

// piri();

module.exports = piri;
