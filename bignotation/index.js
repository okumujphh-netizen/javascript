// constant time
const cruises = [
  "Caribbean Paradise",
  "Indian Ocean Escape",
  "Mediterranean Explorer"
];

console.log(cruises[0]);

// linear time
function displayCruises(cruises) {
  for (let i = 0; i < cruises.length; i++) {
    console.log(cruises[i]);
  }
}

// quadractic time
function compareCruises(cruises) {
  for (let i = 0; i < cruises.length; i++) {

    for (let j = 0; j < cruises.length; j++) {

      console.log(cruises[i], cruises[j]);

    }
  }
} // can become inefficient

// exponetial time
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

