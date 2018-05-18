class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y,2));
    }

    plus(v) {
        return new Vec(this.x + v.x, this.y + v.y);
    }

    minus(v) {
        return new Vec(this.x - v.x, this.y - v.y);
    }

    toString() {
        return JSON.stringify(this);
    }
}

console.log(new Vec(1,2).plus(new Vec(2,3)));
console.log(new Vec(1,2).minus(new Vec(2,3)));
console.log(new Vec(3,4).length);