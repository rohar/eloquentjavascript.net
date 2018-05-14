let string = JSON.stringify({squirrel: false, events:["weekend", "pizza"]});
console.log(string);

console.log(JSON.parse(string).events);