var console = require('console');
var http = require('http');
var config = require('config');

module.exports.function = function mostPopular (pokemonResults,$vivContext) {
  console.log($vivContext.userId)
  var rand = Math.floor(Math.random()*10000000000000)
  console.log(rand)
  var response = null;
  var offset = pokemonResults.offset+10;
  console.log(config.get('remote.newPokemonUrl') + '/pokemon/popular?offset='+offset+'&userId='+$vivContext.sessionId+'&rand='+rand+'')
  response = http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/popular?offset='+offset+'&userId='+$vivContext.sessionId+'&rand='+rand+'', { format: 'json'});
  console.log(response);
  return {pokemons:response.pokemon,offset:response.offset};
}