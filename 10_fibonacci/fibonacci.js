const fibonacci = function(member) {
    if (member < 0) {return "OOPS"}; //exception for negative numbers

    let fib = [0, 1]; //initialize the array
    //generate the fib sequence
    for (i=2; i <= member; i++) { 
        fib[i] = fib[i-2] + fib[i-1];
    };

    return fib[member];
};

fibonacci(-4);
// Do not edit below this line
module.exports = fibonacci;
