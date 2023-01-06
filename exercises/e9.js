import { data } from "../data/data.js";

// SPACE DATA EXERCISE 9
// Return the data object of the planet "Earth"
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getEarthData(data) {
  const earth = 'earth';
  const planets = data.planets.filter((plt) => {
    return plt.id
  });
  const planetName = planets.filter( (plt) => {
    if (plt.id.includes(earth))
      return plt.name;
  });
  return planetName[0];
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
