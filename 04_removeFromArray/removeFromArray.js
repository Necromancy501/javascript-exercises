const removeFromArray = function(array, ...toDelete) {

    // if there's no elements to delete, exit

    if (arguments.length === 1) {
        return array;
    }

    let keepGoing = true;
    index = 1;
    while(keepGoing){

        const deleteElement = arguments[index];

        while (array.includes(deleteElement)){
            array.splice(array.indexOf(deleteElement), 1);
        }

        index++;

        if (arguments.length === index) {
            keepGoing = false;
        }
    }

    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
