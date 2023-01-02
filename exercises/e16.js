import { data } from "../data/data.js";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
export function getGreatestDiscoveryYear(data) {
const asteroids = data.asteroids.map((obj) => obj);
const discoveryYear = asteroids.map((obj) => obj.discoveryYear);
const length0 = discoveryYear.length;
const sort1 = discoveryYear.sort();
const length = sort1.length;
const checked = [];
const equal = [];
const equal2 = [];
const not = [];
function sort2() {
  let a = 0;
  while (a < length) {
    if (sort1[a] === sort1[a + 1]) {
      equal.push(sort1[a], sort1[a + 1]);
    } else {
      checked.push(sort1[a]);
      not.push(sort1[a + 1]);
    }
    a = a + 2;
  }
};
sort2();
function sort3() {
  let a = 0;
  while (a < length) {
    if (sort1[a] === equal[1] || sort1[a] === equal[3] || sort1[a] === equal[5]) {
      equal2.push(sort1[a]);
     
    }
    a = a + 1;
  }
};
sort3();
const doubles = [];
const length2 = equal2.length;

const matchStart = equal2[0];
const filt1 = discoveryYear.filter((obj) => obj === matchStart);
const filt2 = equal2.filter((obj) => obj !== matchStart);
const matchStart1 = filt2[0];
const filt3 = discoveryYear.filter((obj) => obj === matchStart1);
const filt4 = filt2.filter((obj) => obj !== matchStart1);

function sortUp() {
  if (filt1.length > filt3.length || filt1.length > filt4.length) {
    return filt1[0];
  } else if (filt3.length > filt1.length || filt3.length > filt4.length) {
    return filt3[0];
  } else if (filt4.length > filt1.length || filt4.length > filt3.length) {
    return filt4[0];
  }
  };
  sortUp(); 
  const final = sortUp();
  return final;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
