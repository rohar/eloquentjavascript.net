"use strict"

let re1 = new RegExp("abc");
let re2 = /abc/;

console.log(re1.test("abc"));
console.log(re2.test("abc"));
