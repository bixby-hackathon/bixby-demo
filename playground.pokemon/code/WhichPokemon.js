var console = require('console');
var http = require('http');
var config = require('config');

module.exports.function = function findPokemon (pokemonName, $vivContext) {
  var rand = Math.floor(Math.random()*10000000000000)
  var noSpaces = pokemonName.replace(/ /g,"-");
  var response = http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/one/'+noSpaces+'?userId='+$vivContext.userId+'+&rand='+rand+'', { format: 'json'});
  response.message = Math.floor(Math.random()*7+1);
  // response.message = 6;
  return response;
}