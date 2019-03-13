var console = require('console');
var config = require('config');
var http = require('http');

module.exports.function = function GetEvolutions (pokemon,  $vivContext) {
  console.log(pokemon);
  pokemonEvolution = {name:pokemon.name};
  return pokemonEvolution;
}
