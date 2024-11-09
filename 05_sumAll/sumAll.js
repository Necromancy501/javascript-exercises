function isValidInt(value) {
    return typeof value === 'number' && 
           Number.isInteger(value) && 
           value >= 0;
}

const sumAll = function(number1, number2) {
    if (isValidInt(number1) && isValidInt(number2)) {
        let count = Math.abs(number2 - number1);
        let min = number2 > number1 ? number1 : number2;
        let result = min;

        while(count){
            result += ++min;
            count--;
        }
        return result;
    }
    else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;
