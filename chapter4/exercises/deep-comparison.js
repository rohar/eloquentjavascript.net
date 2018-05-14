function deepEqual(o1, o2) {
    if (typeof o1 != typeof o2) {
        return false;
    }

    if (typeof o1 == "object") {
        let o1Keys = Object.keys(o1);
        let o2Keys = Object.keys(o2);
        for (let i = 0; i < o1Keys.length; i++) {
            let key = o1Keys[i];

            if (!o2Keys.includes(key)) {
                return false;
            }

            if (!deepEqual(o1[key], o2[key])) {
                return false;
            }
        }

        return true;
    }

    if (o1 == o2) {
        return true;
    }

    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
