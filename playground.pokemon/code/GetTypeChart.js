var console = require('console');
var config = require('config');
var http = require('http');

const buildUrl = (type)=>{
  return '/images/types/'+type+'.png';
}

const buildMultiplierUrl = (multiplier)=>{
  console.log(multiplier);
  if(multiplier === 0){
    console.log('inside 0')
    return '/images/multiplier/0.png';     
  }
  else if(multiplier === .25){
    console.log('inside .25')
    
    return '/images/multiplier/25.png';     
  }
  else if(multiplier === .5){
    console.log('inside .5')
    
    return '/images/multiplier/5.png';     
  }
  else if(multiplier === 1){
    console.log('inside 1')
    
    return '/images/multiplier/1.png';     
  } 
  else if(multiplier === 2){
    console.log('inside 2')
    
    return '/images/multiplier/2.png';     
  }
  else if(multiplier === 4){
    console.log('inside 4')
    
    return '/images/multiplier/4.png';     
  }
}

module.exports.function = function GetEvolutions (pokemon,  $vivContext) {
  var rand = Math.floor(Math.random()*10000000000000)
  var typeChart  =  http.getUrl(config.get('remote.newPokemonUrl') + '/pokemon/types/'+pokemon.name+'?userId='+$vivContext.userId+'+&rand='+rand+'', { format: 'json'});
  typeChart.resistances.forEach(type=>{
    type.type = buildUrl(type.type);
    type.multiplier = buildMultiplierUrl(type.multiplier);
  })
  typeChart.neutral.forEach(type=>{
    type.type = buildUrl(type.type);
    type.multiplier = buildMultiplierUrl(type.multiplier);
  })
  typeChart.weaknesses.forEach(type=>{
    type.type = buildUrl(type.type);
    type.multiplier = buildMultiplierUrl(type.multiplier);
  })
  console.log(typeChart)
  
  return typeChart;
}
