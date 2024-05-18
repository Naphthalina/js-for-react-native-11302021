
function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

module.exports = {
    processArray
};

function formatArrayStrings(strings, numbers) {
    
    if (strings.length !== numbers.length) {
        throw new Error('Arrays must be of equal length');
    }

    for (let i = 0; i < strings.length; i++) {
        const string = strings[i];
        const number = numbers[i];

        if (number % 2 === 0) {
            strings[i] = string.toUpperCase();
        }
      
        else {
            strings[i] = string.toLowerCase();
        }
    }

    return strings;
}

module.exports = {
    formatArrayStrings
};
