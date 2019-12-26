
const carPassing = (cars, speed) => {
    // Code here!
    const time = Date.now();
    cars.push({time, speed});
    
    // Remember to return an array!
    return cars;
}  