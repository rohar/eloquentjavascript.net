function range(start, end, step = 1) {
    let result = [];

    step = Math.abs(step);
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i -= step) {
            result.push(i);
        }
    }

    return result;
}

function sum(numbers) {
    let result = 0;
    for (let i in numbers) {
        result = +result + +numbers[i];
    }

    return result;
}

console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));