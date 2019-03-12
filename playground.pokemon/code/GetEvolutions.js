var console = require('console');
var config = require('config');
var http = require('http');

module.exports.function = function GetEvolutions (pokemon,  $vivContext) {
  console.log(pokemon);
  return pokemon;
}
