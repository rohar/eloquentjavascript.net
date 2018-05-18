function phi_orig(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
        (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]));
}

function phi_destructured([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt(
            (n10 + n11) *
            (n00 + n01) *
            (n01 + n11) *
            (n00 + n10));
}

let {name} = {name: "Faraji", age: 23};
let {age} = {name: "Faraji", age: 23};
console.log(name);
console.log(age);
