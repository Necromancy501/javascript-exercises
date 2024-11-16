/**
  function reduceThroughArguments(anyFunction, ...args){
    const result = (Array.from(arguments[1])).reduce((total, number),anyFunction);
    return result;
  }
*/

const add = function(...numbers) {
  flag = true;
  const result = (Array.from(arguments)).reduce((total, number)=>{
    if (typeof(number) === 'number'){
      return (total += number);}
    else{
      flag = false;
      return 0;
    }
  }, 0);

  return flag ? result : 'ERROR';
};

const subtract = function(number1, number2) {
  if (typeof(number1) === 'number' && typeof(number2) === 'number'){
    return number1-number2;
  }
  else{
    return 'ERROR';
  }
};

const sum = function(...numbers) {
  flag = true;
  const result = (Array.from(...arguments)).reduce((total, number)=>{
    if (typeof(number) === 'number'){
      return (total += number);}
    else{
      flag = false;
      return 0;
    }
  }, 0);

  return flag ? result : 'ERROR';
};

const multiply = function(...numbers) {
  flag = true;

  // IN THE BELOW LINE, REMOVE ... FOR INTEGERS ARGUMENTS
  const result = (Array.from(...arguments)).reduce((total, number)=>{
    if (typeof(number) === 'number'){
      return (total *= number);}
    else{
      flag = false;
      return 1;
    }
  }, 1);

  return flag ? result : 'ERROR';

};

const power = function(number1, number2) {
  if (typeof(number1) === 'number' && typeof(number2) === 'number'){
    return number1**number2;
  }
  else{
    return 'ERROR';
  }
};

//HELPER FOR FUNCTION BELOW

function isValidInt(value) {
  return typeof value === 'number' && 
         Number.isInteger(value) && 
         value >= 0;
}

const factorial = function(number) {
  if (isValidInt(number)){
    return (number === 0 || number === 1) ? 1 : parseInt(number * factorial(number-1));

  }
  else{
    return 'ERROR';
  } 	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
