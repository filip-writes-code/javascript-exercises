const palindromes = function (input) {

    const word = input.split("") //splits characters into an array
    .filter(character => {return /[a-zA-Z0-9]/.test(character)}) //strips of punctuation
    .map(element => element.toLowerCase())   //converts to lowercase for comparison
    .join(""); //and joins it back into a string

    const reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {return true } else {return false};
};

palindromes('ZZZZ car, a man, a maracaz.')
// Do not edit below this line
module.exports = palindromes;
