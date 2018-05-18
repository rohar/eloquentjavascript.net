"use strict"

/*
    replace() - replaces part of the string with another string
*/

console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));

// you can also use part of the matching to do replacement using $1, $2 etc which are the match groups

console.log(
    "Liskov, Barbaba\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1"));

// you can also pass in functions
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

// a more interesting one
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) -1;
    if (amount == 1) { // oly one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no"
    }
    return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
