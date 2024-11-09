function isValidTimes(value) {
    return typeof value === 'number' && 
           Number.isInteger(value) && 
           value >= 0;
}

const repeatString = function(word, times) {
    let string = "";
    if (isValidTimes(times)){
        while (times) {
            string +=word ;
            times--;
        }
        return string;
    }
    else {
        return 'ERROR';
    }
    
};



// Do not edit below this line
module.exports = repeatString;
