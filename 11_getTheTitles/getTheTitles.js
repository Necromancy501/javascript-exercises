const getTheTitles = function(array) {
    const titles = array.map((book) => book.title ? book.title : '');
    const titlesCleaned = titles.filter((book) => book != '');
    return titlesCleaned;
};

// Do not edit below this line
module.exports = getTheTitles;
