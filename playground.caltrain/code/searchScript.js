module.exports.function = function searchScript (dontInput, doInput, searchInput) {
  
  if (dontInput != null) {
    return "escape " + dontInput.toString();
  }
  
  return "output: " + searchInput.toString();
}


