"use strict"

/*
    +      - one or more matches 
    *      - zero or more matches 
    ?      - zero or 1 match 
    {n}    - exactly n matches 
    {x, y} - between x and y matches
    {x,}   - x or more times
*/

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));