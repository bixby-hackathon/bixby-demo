var fs = require('fs');

fs.readFile('./allPokemonSymbol.txt', 'utf8', (err, data) => {
  //   console.log(data);
  var lowerCased = data.toLowerCase();
  fs.writeFile('allPokemonSymbolLowerCased.txt', lowerCased, err => {
    if (err) throw err;
    console.log('success');
  });
});

fs.readFile('./allPokemonVocab.txt', 'utf8', (err, data) => {
  //   console.log(data);
  var lowerCased = data.toLowerCase();
  fs.writeFile('allPokemonVocabLowerCased.txt', lowerCased, err => {
    if (err) throw err;
    console.log('success');
  });
});
