var console = require('console');
var http = require('http');
var config = require('config');

module.exports.function = function findRandomPokemon($vivContext) {
  var rand = Math.floor(Math.random() * 10000000000000)
  var response = http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/random/1?userId=' + $vivContext.userId + '&rand=' + rand + '', {
    format: 'json'
  });
  response.message = Math.floor(Math.random() * 10 + 1);
  // response.message = 10;
  console.log(response.toString());
  return response;
}
