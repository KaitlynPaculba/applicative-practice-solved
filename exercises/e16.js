import { data } from "../data/data.js";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
export function getGreatestDiscoveryYear(data) {
  const discYear = data.asteroids.map((ast) => ast.discoveryYear);
  const filt1 = discYear.reduce(function (acc, val) {
    return { ...acc, [val]: (acc[val] || 0) + 1 };
  }, {});
  const clickYear = Object.keys(filt1).reduce(function(a, b) {
   return filt1[a] > filt1[b] ? a : b;
  });
  return Number(clickYear);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
