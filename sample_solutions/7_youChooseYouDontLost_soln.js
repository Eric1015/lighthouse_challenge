const termTopics = (interviews) => {
    // Code here!
    res = [0,0,0];
    
    interviews.forEach((interview) => {
      switch(interview) {
        case "smart city":
          res[0]++;
          break;
        case "arts funding":
          res[1]++;
          break;
        case "transportation":
          res[2]++;
          break;
        default:
          break;
      }
    })
    
    // Remember to return an array!
    return res;
}
  