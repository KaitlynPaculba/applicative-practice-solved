//import { i } from "vitest/dist/index-5aad25c1.js";
import { data } from "../data/data.js";


// SPACE DATA EXERCISE 9
// Return the data object of the planet "Earth"
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

// I know im not supposed to use other properties but I couldn't figure it out.

export function getEarthData(data) {
  const planets = data.planets.map((obj) => obj);
  const earth0 = planets.filter((obj) => obj.id === 'earth'); 
  const earthLength = earth0.length
  const earth1 = earth0.reduce(function objConst(result, item) {
  let a = 0;
  while (a < earthLength) {
  var key = Object.keys(item)[a];
  result[key] = item[key]
  result;
  a = a + 1;
  } { };});
  const earth = earth1;
  
  return earth;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
