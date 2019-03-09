var console = require('console');
var http = require('http');
var config = require('config');

module.exports.function = function findPokemon (pokemonName, $vivContext) {
  console.log($vivContext.sessionId)
  console.log($vivContext.userId)
  var response = null;
  response  =  http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/one/'+pokemonName+'/', { format: 'json'});
  // response  =  http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/more?sid='+$vivContext.sessionId+'', { format: 'json'});
  console.log(response);
  return response;
}