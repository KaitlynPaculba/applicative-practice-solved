import { data } from "../data/data.js";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  const planetWMoon = data.planets.filter((plt) => { return plt.moons });
  const planetMoonName = planetWMoon.filter( (plt) => {
    if (plt.moons.includes(moonName))
      return plt.name;
  });
  return planetMoonName[0].name;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
