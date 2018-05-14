function loop(startValue, condition, update, action) {
    for (let i = startValue; condition(i); i = update(i)) {
        action(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);