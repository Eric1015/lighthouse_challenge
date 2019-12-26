const checkAir = function (samples, threshold) {
    // Code here!
    var clean = 0;
    var dirty = 0;
    
    samples.forEach((sample) => {
      if (sample === "clean") {
        clean++;
      } else if (sample === "dirty") {
        dirty++;
      }
    })
    
    // Remember to return a value
    if (dirty / samples.length >= threshold) {
      return "Polluted"
    } else {
      return "Clean"
    }
}