const reverseString = function(word) {

    if (typeof word !== 'string') {
        return 'ERROR';
    }

    let backwardsPointer = 1;
    let reversedWord = "";
    keepGoing = true;
    while(keepGoing){
        const reverseIndex = word.length-backwardsPointer;
        reversedWord += word.charAt(reverseIndex);
        if (reverseIndex <= 0) {
            keepGoing = false;
        }
        backwardsPointer++;
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
