"use strict"

/*
    ^  - matching from the start of the string
    $  - matching until the end of the string
    \b - word boundary
*/

console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));

// all digits
console.log(/^\d+$/.test("1234567"));
console.log(/^\d+$/.test("1234567a"));