const findTheOldest = function(array) {
    let maxAge = 0;
    oldest = array.reduce((obj, person) => {
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : (new Date()).getFullYear() - person.yearOfBirth;
        console.log(`${person.name} has ${age} years.`);

        if (age > maxAge){
            maxAge = age;
            return person;
        }

        return obj;
    }, null);

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
