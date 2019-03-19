var console = require('console');
var config = require('config');
var http = require('http');

module.exports.function = function GetEvolutions (pokemon,  $vivContext) {
  var rand = Math.floor(Math.random()*10000000000000)
  var typeChart  =  http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/types/'+pokemon.name+'?userId='+$vivContext.userId+'+&rand='+rand+'', { format: 'json'});
  return typeChart;
}
