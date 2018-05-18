function countChar(s, matchChar) {
    let charCount = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] == matchChar) {
            charCount++;
        }
    }

    return charCount;
}

function countBs(s) {
    const matchChar = "B";
    return countChar(s, matchChar);
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));