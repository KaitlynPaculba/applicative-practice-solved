
import { data } from "../data/data.js";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']
const planetArray = data.planets.map((obj) => obj.name);
export function getPlanetNames(data) {
  return planetArray;
}; 


console.table(planetArray);




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
