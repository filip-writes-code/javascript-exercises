const reverseString = function(string) {
    const characters = string.split("");
    let reversedWord = "";
    for (let i = characters.length - 1; i >= 0; i--) {
        reversedWord += characters[i];
    }
    return reversedWord;
};

reverseString('Hola');
// Do not edit below this line
module.exports = reverseString;
