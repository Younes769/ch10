function longWrd(words) {
    return words.reduce((longestWord, currentWord) => {
        if (currentWord.length > longestWord.length) {
            return currentWord;
        } else {
            return longestWord;
        }
    }, "");
}
let words = ["hello", "world", "goodbye", "sunshine"];
console.log(longWrd(words));