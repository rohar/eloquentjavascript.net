"use strict"

console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

/*
    \d	Any digit character
    \w	An alphanumeric character (“word character”)
    \s	Any whitespace character (space, tab, newline, and similar)
    \D	A character that is not a digit
    \W	A nonalphanumeric character
    \S	A nonwhitespace character
    .	Any character except for newline 
*/

// match time format like 30-01-2003 15:20
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"));

// ^ inverts test
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));