module.exports.function = function findPokemon (pokemonName) {
  var response = null;
  if(pokemonName){
    response  =  http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/'+pokemonName+'/', { format: 'json' });
    console.log(response);
    return response;
  } else{
    response = http.getUrl(config.get('remote.pokemonUrl') + '/pokemon', { format: 'json' });
    return response.results;
  }
  // Read the remote.url value from capsule.properties
  // var response = http.getUrl('https://pokeapi.co/api/v2/pokemon', { format: 'json' });
}
