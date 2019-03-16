var console = require('console');
var http = require('http');
var config = require('config');

module.exports.function = function findPokemon (pokemonName, $vivContext) {
  var rand = Math.floor(Math.random()*10000000000000)
  var lowerCased = pokemonName.toLowerCase()
  var response = http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/one/'+lowerCased+'?userId='+$vivContext.userId+'+&rand='+rand+'', { format: 'json'});
  response.message = Math.floor(Math.random()*8+1);
  // response.message = 7;
  return response;
}