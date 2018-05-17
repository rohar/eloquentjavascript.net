"use strict"

/*
    | - or
*/

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pig"));
console.log(animalCount.test("15 pigchickens"));