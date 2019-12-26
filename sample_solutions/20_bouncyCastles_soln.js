const PI = 3.14159 

const sphereVolume = function (radius) {
  // Code here

  // Remember to return a value
  return 4 * Math.pow(radius, 3) * PI / 3;
}

const coneVolume = function (radius, height) {
  // Code here

  // Remember to return a value
  return PI * Math.pow(radius, 2) * height / 3;
}

const prismVolume = function (height, width, depth) {
  // Code here

  // Remember to return a value
  return height * width * depth;
}

const totalVolume = function (solids) {
  // Code here
  var res = 0;
  solids.forEach((solid) => {
    switch(solid.type) {
      case "sphere":
        res += sphereVolume(solid.radius);
        break;
      case "cone":
        res += coneVolume(solid.radius, solid.height);
        break;
      case "prism":
        res += prismVolume(solid.height, solid.width, solid.depth);
        break;
      default:
        break;
    }
  })
  // Remember to return a value;
  return res;
}
