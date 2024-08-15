const removeFromArray = function(array, ...valuesToRemove) {
    for (let i = 0; i < array.length; i++) {

        for (const valueItem of valuesToRemove) {
            if (array[i] === valueItem ) {
                array.splice(i, 1);
                i--;
            }
        }
    }
return array;
};

//test stuff - delete after done
testArray = [1, 2, 3, 4];
removeFromArray(testArray, 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
