function isValidInt(value) {
  return typeof value === 'number' && 
         Number.isInteger(value) && 
         value >= 0;
}

const roundNumber = num => Math.round(num * 10) / 10;

const convertToCelsius = function(temperature) {
  temperature = (temperature - 32) * 5/9;
  return roundNumber(temperature);
};

const convertToFahrenheit = function(temperature) {
  temperature = temperature * 9/5 + 32;
  return roundNumber(temperature);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
