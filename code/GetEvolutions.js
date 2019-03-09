var console = require('console');
var config = require('config');
var http = require('http');

module.exports.function = function GetEvolutions (pokemonName,  $vivContext) {
  console.log(pokemonName);
  var pokemon = {name:'poop'};
  response  =  http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/more?sid='+$vivContext.sessionId+'', { format: 'json'});
  return pokemon;
}
