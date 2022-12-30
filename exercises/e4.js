//import { i } from "vitest/dist/index-5aad25c1.js";
//import { k } from "vitest/dist/index-5aad25c1.js";
import { data } from "../data/data.js";

// SPACE DATA EXERCISE 4
// Return an array of Planets' names with gravity less than 10
// Return example: ['name1', 'name2', ... , 'nameN']


export function getPlanetsWithLowGravity(data) {
  const planet0 = data.planets.map((obj1) => obj1.name);
const gravity = data.planets.map((obj) => obj.gravity);
const planets = planet0.toString();
const planet = planets.split(',');
const testplanGrav = [];
function objConst(name, grav) {
  let a = 0;
  while (a < 8) {
    let newObj ={name: planet[a], gravity: gravity[a]};
    testplanGrav.push(newObj);
    a = a + 1;
  }
};
const planetGravity = objConst();
  const lowGravPlanets = testplanGrav.filter((obj) => obj.gravity < 10);
  const lowGravNames = lowGravPlanets.map((obj) => obj.name);

  return lowGravNames;
 };
// console.table(planet0);
// console.table(gravity0);
// console.log(planetGravity);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
