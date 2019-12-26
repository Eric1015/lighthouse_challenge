const busTimes = buses => {
    // Code here!
    var res = {};
    for (var property in buses) {
      res[property] = buses[property]["distance"] / buses[property]["speed"];
    }
    
    // Remember to return an object!
    return res;
}
  