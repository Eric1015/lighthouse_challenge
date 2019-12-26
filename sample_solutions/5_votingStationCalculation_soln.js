const chooseStations = (stations) => {
    // Code here!
    arr = stations.filter((station) => {
      return (station[1] >= 20) && (station[2] == "school" || station[2] == "community centre");
    })

    // Remember to return a value!
    return arr.map((a) => {
      return a[0];
    })
}
  