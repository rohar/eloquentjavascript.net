function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("hello");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

Rabbit.prototype.add = function(a, b) {
    return a + b;
}

console.log(weirdRabbit.add(1, 2));
