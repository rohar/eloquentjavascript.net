"use strict"

console.log(new Date());

console.log(new Date(2009, 11, 9));

console.log(new Date(2009, 11, 9, 12, 59, 999));

console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387411200000));

function getDate(string) {
    // _ is to ignore the whole match string
    let [_, day, month, year] = 
        /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);

        return new Date(year, month - 1, day);
}

console.log(getDate("30-1-2003"));