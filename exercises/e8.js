import { data } from "../data/data.js";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

 export function findPlanetNameByMoon(data, moonName) {
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
  function MoonFilt() {
    let a = 0;
    while (a < planLength) {
      if (planMoonArr[a].moons.includes(moonName)) {
        return planMoonArr[a].name;
      } else {
        a = a + 1
      }
    }
  };
  MoonFilt();
  const MoonFiltTag = MoonFilt();
   return MoonFiltTag;
 }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
