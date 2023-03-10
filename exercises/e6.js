import { data } from "../data/data.js";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
const asteroids = data.asteroids.map((obj) => obj.name)
const astYear = data.asteroids.map((obj) => obj.discoveryYear);
const astYearCon = [];
const astlength = asteroids.length;

function objConst() {
  let a = 0;
  while (a < astlength) {
    let newObj = { name: asteroids[a], discoveryYear: astYear[a] };
    astYearCon.push(newObj);
    a = a + 1;
  }
};
objConst();
const yearFilt = astYearCon.filter((obj) => obj.discoveryYear > year);
const finalDiscYearArr = yearFilt.map((obj) => obj.name);
  year = year + 1;
return finalDiscYearArr;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
