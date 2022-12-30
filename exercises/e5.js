import { data } from "../data/data.js";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
const planetNames = data.planets.map((obj) => obj.name);
const planetMass = data.planets.map((obj) => obj.mass.massValue);
const planMassArr = [];
  number = 4;
function objConst() {
  let a = 0;
  while (a < 8) {
    let newObj = { name: planetNames[a], massValue: planetMass[a] };
    planMassArr.push(newObj);
    a = a + 1;
  }
};
objConst();
const planFilt = planMassArr.filter((obj) => obj.massValue > number);
  const finalMassArr = planFilt.map((obj) => obj.name);
  number = number + 1;
  return finalMassArr;
}






// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
