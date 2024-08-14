const repeatString = function(string, num) {
    let output = '';
   
    if (num >= 0) {
        for (let i = 1; i <=num ; i++) {
            output += string;
        }
        return output;
    } else {
        return "ERROR";
    }
    
    
};

// Do not edit below this line
module.exports = repeatString;
