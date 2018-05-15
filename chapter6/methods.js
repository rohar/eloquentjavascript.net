let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit say '${line}'`);
};

rabbit.speak("I'm alive.");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whislers, " + 
    "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");
speak.call(hungryRabbit, "Burp!"); // "this." is passed as first parameter
speak(whiteRabbit, "Test!"); // doesn't work properly, without .call

function normalise() {
    console.log(this.coords.map(n => n / this.length));
}
normalise.call({coords: [0, 2, 3], length: 5});

function normalise_1(o) {
    console.log(o.coords.map(n => n / o.length));
}
normalise_1({coords: [0, 2, 3], length: 5});

