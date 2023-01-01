import { data } from "../data/data.js";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName) {
const asteroids = data.asteroids.map((obj) => obj);
const asteroidSearch = asteroids.filter((obj) => obj.name === asteroidName)
const asteroidLength = asteroidSearch.length;
const asteroid = asteroidSearch.reduce(function objConst(result, item) {
  let a = 0;
  while (a < asteroidLength) {
  var key = Object.keys(item)[a];
  result[key] = item[key]
  result;
  a = a + 1;
  } { };});
  const selectAsteroid = asteroid;
  return selectAsteroid;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
