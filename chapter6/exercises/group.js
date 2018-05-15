class Group {
    constructor() {
        this.elements = [];
    }

    add(element) {
        if (this.elements.indexOf(element) == -1) {
            this.elements.push(element);
        }
    }

    delete(element) {
        this.elements = this.elements.filter(e => e != element);
    }

    has(element) {
        return this.elements.indexOf(element) == -1 ? false : true;
    }

    static from(elements) {
        let group = new Group();
        for (let i of elements) {
            group.add(i);
        }

        return group;
    }
}

class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.group = group;
    }

    next() {
        if (this.i == this.group.elements.length) {
            return {done: true};
        }

        let value = {
            value: this.group.elements[this.i]
        };

        this.i++;

        return {value, done: false};
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

