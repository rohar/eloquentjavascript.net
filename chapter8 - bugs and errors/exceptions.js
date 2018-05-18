class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    // this the way to selectively catch exceptions
    // JS doesn't have the same richness of Java
    if (e instanceof InputError) {
        console.log("Not a valid direction: " + error);
    } else {
        throw e;
    }
} finally {
    console.log("We've finished");
}