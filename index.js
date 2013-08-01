var request = require('request');
var qs = require('querystring');

module.exports = (function(options){
  return new Nominatim(options);
})();

function Nominatim(options){
  this.url = 'http://nominatim.openstreetmap.org/';
}

Nominatim.prototype.search = function(options, callback){
  getResults(this.url + 'search?', options, callback);
};

Nominatim.prototype.reverse = function(options, callback){
  getResults(this.url + 'reverse?', options, callback);
};

function getResults(url, options, callback){
  request.get(url + qs.stringify(options), function(error, response, body){    
    var results = JSON.parse(body);
    callback(error, results);
  });
}