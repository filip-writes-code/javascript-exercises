function compareNumbers(a, b)
{
    return a - b;
};

const sumAll = function(...inputs) {

    for (const value of inputs) {
        if ( !Number.isInteger(value) || value < 0 ) {
            return "ERROR";
        }
    }

    inputs.sort(compareNumbers);
    let sum = 0;
    for (let i = inputs[0]; i <= inputs[1]; i++ ) {
        sum += i;
    }
    return sum;
};


//test stuff
console.log(sumAll(124, 1));

// Do not edit below this line
module.exports = sumAll;
