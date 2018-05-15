let empty = {};
console.log(empty.toString);
console.log(empty.toString());

// prototypes are basically superclasses
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype)); // Object.prototype - the root prototype!

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

console.log(Object.getPrototypeOf([]) == Array.prototype);

