function reverseArray(array) {
    let result = [];

    let j = 0;
    for (let i = array.length -1; i >= 0; i--) {
        result[j++] = array[i];
    }

    return result;
}

function reverseArrayInPlace(array) {
    let j = array.length - 1;
    for (let i = 0; i < j; i++, j--) {
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }

    return array;
}

console.log(reverseArray(["A", "B", "C"]));

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));