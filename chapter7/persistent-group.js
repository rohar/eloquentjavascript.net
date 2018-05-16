class PGroup {
    constructor (elements) {
        this.elements = elements;
    }

    add(element) {
        let newArray = this.elements.slice();
        newArray.push(element);

        return new PGroup(newArray);
    }

    delete(element) {
        return new PGroup(this.elements.filter(e => e != element));
    }

    has(element) {
        return this.elements.includes(element);
    }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty;
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));
