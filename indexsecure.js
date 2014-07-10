	var http = require("http"),
	    Twit = require('twit'),
	    keystore = require ('./keystore.js');

function piri (){
	var T = new Twit (keys);
	T.get('search/tweets', { q: '#foundersandcoders since:2014-01-01', count:   10} , function(err, data, response) {
		
		console.log(data.statuses[0].entities.media[0].media_url);
	});
}

piri();

module.exports = piri;
