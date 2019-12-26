// Remember, the possible candidates are: Tim, Sally, and Beth (in that order)
const castVote = (name, votes) => {
    // Code here!
    switch (name) {
      case "Tim":
        votes[0]++;
        break;
      case "Sally":
        votes[1]++;
        break;
      case "Beth":
        votes[2]++;
        break;
      default:
        break;
    }
    // Remember to return a value!
    return votes;
}