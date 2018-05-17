"use strict"

/*
  () - allows grouping of elements
  i  - at end of regex, makes whole regex case insensitive
*/

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohooooohoohooo"));