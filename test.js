var nom = require('./index');

console.log(nom);

var options = { q: 'Pioneer Square, Seattle, WA', format: 'json' };

nom.search(options, function(error, response){
  console.log(response.length, response);
});

var reverseThis = { lat: 47.6017456054688, lon: -122.334121704102, format: 'json' }

nom.reverse(reverseThis, function(error, response){
  console.log(error, response)
});