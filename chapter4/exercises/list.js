function arrayToList(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        let node = {
            value: array[i],
            rest: null
        }
        node.rest = list;

        list = node;
    }

    return list;
}

function listToArray(list) {
    let array = [];

    for (let node = list; node != null; node = node.rest) {
        array.push(node.value);
    }

    return array;
}

function prepend(n, list) {
    let node = {
        value: n,
        rest: list
    }

    return node;
}

function nth(list, index) {
    let value = null;

    node = list;
    for (let i = 0; i <= index && node != null; i++) {
        value = node.value;
        node = node.rest;    
    }

    return value;
}

console.log(JSON.stringify(arrayToList([10, 20])));
console.log(listToArray(arrayToList([10, 20, 30])));

console.log(JSON.stringify(prepend(10, prepend(20, null))));

console.log(nth(arrayToList([10, 20, 30]), 1))