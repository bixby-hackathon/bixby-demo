var console = require('console');
var http = require('http');
var config = require('config');

module.exports.function = function fetchAttack(pref, stat, $vivContext) {
  console.log($vivContext.userId)
  var rand = Math.floor(Math.random() * 10000000000000)
  var response = null;
  var stat = '/pokemon/stats/' + stat.toLowerCase().replace('-', '');
  var sort = 'sort=' + pref.toLowerCase();
  response = http.getUrl(config.get('remote.newPokemonUrl') 
                + stat
                + '?'
                + sort
                + '&userId=' 
                + $vivContext.sessionId 
                + '&rand=' 
                + rand , {format: 'json'});
  return response;
}
