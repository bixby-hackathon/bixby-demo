var console = require('console');
var http = require('http');
var config = require('config');

module.exports.function = function findPokemon ($vivContext) {
  console.log($vivContext.userId)
  var rand = Math.floor(Math.random()*10000000000000)
  console.log(rand)
  var response = null;
  response  =  http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/popular?userId='+$vivContext.sessionId+'&rand='+rand+'', { format: 'json'});
  console.log(response);
  return response;
}