const lightsOn = function(lights) {
    // Code here!
    lights = lights.map((light) => {
      light.on = true;
      return light;
    });
    // Remember to return an array
    return lights;
}
  
const lightsOff = function(lights) {
    // Code here!
    lights = lights.map((light) => {
      light.on = false;
      return light;
    });
    // Remember to return an array
    return lights;
}
  
const toggleLights = function(lights, lightsAreOn) {
    // Code here!
    if (lightsAreOn) {
      lightsOff(lights);
    } else {
      lightsOn(lights);
    }
    // Remember to return an array
    return lights;
}
  