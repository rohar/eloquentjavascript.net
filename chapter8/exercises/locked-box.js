"use strict"

const box = {
    locked: true,
    unlock() {this.locked = false; },
    lock() {this.locked = true; },
    _content: [],
    get_content() {
        if (this.locked) {
            throw new Error("Locked!");
        }
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let isAlreadyOpen = box.locked;

    try {
        box.unlock();
        body();
        console.log(box.get_content());
    } finally {
        if (!isAlreadyOpen) {
            box.lock()
        }
    }
}

withBoxUnlocked(function() {
    box._content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

console.log(box.locked);
