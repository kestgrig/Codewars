console.log('<<< Opposite number >>>')
// Very simple, given a number (integer / decimal 
// both depending on the language), find its opposite
// (additive inverse).

function opposite(number) {
    result = number * (-1);
    return result;
}
console.log(opposite(-5));
console.log(opposite(50));

console.log('-------------------------');

function opposite(number) {
    return (-number);
}

console.log(opposite(-5));
console.log(opposite(50));

console.log('-------------------------');

const opposite1 = number => -number;

console.log('-------------------------');

function opposite(number) {
    return number * (-1);
}

console.log(opposite(-15));
console.log(opposite(500));

