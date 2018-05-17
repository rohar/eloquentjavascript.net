"use strict"

/*
    operators are greedy by default
    - adding ? after +, *, ? or {} turns them non-greedy
*/

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("1 /* a */+/* b */ 1"));

function stripCommentsNonGreedy(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripCommentsNonGreedy("1 /* a */+/* b */ 1"));
