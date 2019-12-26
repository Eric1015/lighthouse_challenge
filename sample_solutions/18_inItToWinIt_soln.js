const countTickets = (tickets) => {
    // Code here!
    var res = {red: 0, green: 0, blue: 0};
    tickets.forEach((ticket) => {
      res[ticket]++;
    });
    // Remember to return an object
    return res;
}
  
const bestOdds = (tickets, raffleEntries) => {
    // Code here!
    var counts = countTickets(tickets);
    var red = raffleEntries.red / counts.red;
    var green = raffleEntries.green / counts.green;
    var blue = raffleEntries.blue / counts.blue;
    // Remember to return a value
    if (red < blue && red < green) {
      return "You have the best odds of winning the red raffle.";
    } else if (blue < red && blue < green) {
      return "You have the best odds of winning the blue raffle.";
    } else {
      return "You have the best odds of winning the green raffle.";
    }
}  