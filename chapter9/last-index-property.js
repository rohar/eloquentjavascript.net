"use strict"

let pattern = /y/g;

pattern.lastIndex = 3; // the start position
let match = pattern.exec("xyzzy");
console.log(match.index);
console.log(pattern.lastIndex); // one place after the match

let global = /abc/g;
console.log(global.exec("xyz abc"));

let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));

let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("and now: 1")); // last index was set on previous, so this new "1" isn't found!