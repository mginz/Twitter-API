var Twit = require('twit')
var keystore = require ('./keystore.js')

//console.log(keys)
var T = new Twit (keys);

T.get('search/tweets', { q: '#foundersandcoders since:2014-07-07', count: 100 }, function(err, data, response) {
    console.log(data)
});