function isValidInt(value) {
    return typeof value === 'number' && 
           Number.isInteger(value) && 
           value >= 0;
}

const leapYears = function(year) {
    if(isValidInt(year)) {
        return (year%100 ? !(year%4) : !(year%400));
    }
    else{
        return('ERROR');
    }
};

// Do not edit below this line
module.exports = leapYears;
