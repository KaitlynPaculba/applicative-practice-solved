import { data } from "../data/data.js";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42



export function allPlanetsMoonsCount(data) {
const planets = data.planets.map((obj) => obj);
const moonCount = planets.map((obj) => obj.moonsCount);
const moonNum = moonCount.filter((obj) => obj > 0);
const moonLength = moonNum.length;
const equationAdd = [];
const test = moonNum.values();
function moonNumEquate() {
  let a = 0;
  while (a < moonLength) {
  const newObj =  moonNum[a] + moonNum[a + 1];
    equationAdd.push(newObj);
    a = a + 2;
  }
};
moonNumEquate();
let sum = equationAdd[0] + equationAdd[1] + equationAdd[2];
  return sum;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
