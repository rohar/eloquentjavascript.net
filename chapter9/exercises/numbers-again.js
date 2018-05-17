"use strict"

//let number = /[-|+]?[0-9]*\.?[0-9]*/;

let number = /^[-|+]?([0-9]+|[0-9]+\.[0-9]*|\.[0-9]+)([e|E][-|+]?[0-9]+)?$/

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}