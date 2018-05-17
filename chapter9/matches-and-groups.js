"use strict"

/*
    test()  - whether regex matches strings
    exec()  - returns null if no match, otherwise return object for the match
            - you can loop with this to find further matches
    match() - like exec, but finds all matches and returns them 
*/

let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

console.log("one two 100".match(/\d+/));

// loop examples
let s = "aAbBcC";

let onceRegex = /([a-z])([A-Z])/;
let globalRegex = /([a-z])([A-Z])/g;

// first part of returned array is match, subsequent parts are the matched groups
console.log("match once   =" + s.match(onceRegex));
console.log("match global =" + s.match(globalRegex)); // only first!
console.log("exec once = " + onceRegex.exec(s));
console.log("exec once = " + onceRegex.exec(s));
console.log("exec once = " + onceRegex.exec(s));
console.log("exec global = " + globalRegex.exec(s));
console.log("exec global = " + globalRegex.exec(s));
console.log("exec global = " + globalRegex.exec(s));


let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));