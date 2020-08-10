*\const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school']
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let finalValue = []

  for (const station of stations) {

    if (station[1] >= 20 ) {

      if (station[2] === 'school' || station[2] === 'community centre'){
        finalValue.push(station[0])
      } 
    }
  }
  return finalValue
}
console.log(chooseStations(stations))