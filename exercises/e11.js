import { data } from "../data/data.js";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// Return example: ['name1', 'name2', ... , 'nameN']




export function lowMoonsPlanets(data) {
 const planets = data.planets.map((obj) => obj);
const pLength = planets.length;
const lowMoons = [];
const notLow = [];
function MoonFilt() {
  let a = 0;
  while (a < pLength) {
    if (planets[a].moonsCount < 10) {
      lowMoons.push(planets[a]);
    } else {
      notLow.push(planets[a]);
    }
    a = a + 1
  }
};
MoonFilt();
const lowMPlanNames0 = lowMoons.filter((obj) => obj.name);
const lowMPlanNames = lowMPlanNames0.map((obj) => obj.name);

  return lowMPlanNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
