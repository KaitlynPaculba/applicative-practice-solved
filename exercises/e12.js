import { data } from "../data/data.js";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42


export function allPlanetsMoonsCount(data) {
  const planetsMoons = data.planets.map((plt) => plt.moonsCount);
  const planFIlt = planetsMoons.filter((plt) => plt > 0);
  const equate2 = planFIlt.reduce((pre, cur) => pre + cur);
  return equate2;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
