import { data } from "../data/data.js";

// SPACE DATA EXERCISE 7
// Return an array of all Planets names that have moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsNamesWithMoons(data) {
  const planets = data.planets.map((obj) => obj.name);
const planMoon = data.planets.map((obj) => obj.moons);
const planLength = planets.length;
const planMoonArr = [];

function objConst() {
  let a = 0;
  while (a < planLength) {
    const newObj = { name: planets[a], moons: planMoon[a] };
    planMoonArr.push(newObj);
    a = a + 1;
  }
};
objConst();
const moonFilt = planMoonArr.filter((obj) => obj.moons != undefined);
const planMoonTrue = moonFilt.map((obj) => obj.name);
  return planMoonTrue;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
