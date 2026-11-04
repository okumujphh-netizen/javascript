const cruises = [
  "Caribbean Paradise",
  "Mediterranean Explorer",
  "Indian Ocean Escape",
  "Pacific Adventure"
];

function findCruise(cruises, target) {
  for (let i = 0; i < cruises.length; i++) {
    if (cruises[i] === target) {
      return cruises[i];
    }
  }

  return "Cruise not found";
}

console.log(findCruise(cruises, "Indian Ocean Escape"));