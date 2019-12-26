const dynamicPricing = (numberOfPeople, distanceTraveled) => {
    // Code here!
    var res = (numberOfPeople >= 30)? 1.25 : 1;
    res += distanceTraveled * 0.25;
    // Remeber to return a value
    return "$" + res.toFixed(2);
}  