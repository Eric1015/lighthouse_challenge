const pumpkinSpice = money => {
    // Code here
    var numPies = Math.floor(money / 5);
    money = money - 5 * numPies;
    var numLattes = Math.floor(money / 3);
    money = money - 3 * numLattes;
    var numMacarons = money;
    var totalGrams = numPies * 30 + numLattes * 15 + numMacarons * 3;
    // Remember to return an array
    return [numPies, numLattes, numMacarons, totalGrams];
}  