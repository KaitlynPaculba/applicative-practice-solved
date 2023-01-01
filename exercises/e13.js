import { data } from "../data/data.js";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53


export function getAveragePlanetsTemperature(data) {
  const planets = data.planets.map((obj) => obj);
  const aveTemp = planets.map((obj) => obj.avgTemp);
  const length = aveTemp.length;
  const average0 = aveTemp.reduce((a, b) => a + b) / length;
  const average = average0;
  return average;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
