const fibonacci = function(number) {
    const fibonacciArray = [1, 1];
    parseInt(number);
    console.log(number);
    if (number == 2 || number == 1){
        return 1;
    }
    else if (number == 0){
        return 0;
    }
    else if (number < 0){
        return 'OOPS';
    }
    else {
        while (fibonacciArray.length < number){
            const lastIndex = fibonacciArray.length - 1;
            fibonacciArray.push(fibonacciArray[lastIndex] + fibonacciArray[lastIndex - 1]);
        }
        return fibonacciArray[fibonacciArray.length-1];
    }
}

// Do not edit below this line
module.exports = fibonacci;
