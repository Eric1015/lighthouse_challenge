
const whereCanIPark = (spots, vehicle) => {
    // Code here!
    var res_i = -1;
    var res_j = -1;
    
    var matching_symbols = [];
    switch(vehicle) {
      case "regular":
        matching_symbols.push("R");
        break;
      case "small":
        matching_symbols.push("R");
        matching_symbols.push("S");
        break;
      case "motorcycle":
        matching_symbols.push("R");
        matching_symbols.push("S");
        matching_symbols.push("M");
        break;
      default:
        break;
    }
    
    var found = false;
    for (var i = 0; i < spots.length; i++) {
      for (var j = 0; j < spots[i].length; j++) {
        if (isMatching(spots[i][j], matching_symbols)) {
          found = true;
          res_i = i;
          res_j = j;
          break;
        }
      }
      if (found) break;
    }
    if (res_j === -1) {
      return false;
    }

    // Remember to return an array!
    return [res_j, res_i];
}
  
const isMatching = (spot, matching_symbols) => {
    for (var i = 0; i < matching_symbols.length; i++) {
      if (spot === matching_symbols[i]) {
        return true;
      }
    }
    return false;
}
  