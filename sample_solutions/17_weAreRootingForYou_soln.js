const judgeVegetable = (vegetables, metric) => {
    // Code here!
    var res = '';
    var max = -1;
    vegetables.forEach((vegetable) => {
      if (vegetable[metric] > max) {
        res = vegetable.submitter;
        max = vegetable[metric];
      }
    })
    
    return res;
}