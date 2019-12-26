const voterTurnout = (voter_signatures, voter_ids) => {
    // Code here!
    if (voter_signatures.length !== voter_ids.length) return false;
    
    for (var i = 0; i < voter_signatures.length; i++) {
      if (voter_signatures[i] !== voter_ids[i]) {
        return "FRAUD!";
      }
    }
    // Remember to return a value!
    return "All clear, we can count the votes!";   
}