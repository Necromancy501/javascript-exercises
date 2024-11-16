const palindromes = function(word) {

    const cleaned = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
