https://www.codewars.com/kata/544675c6f971f7399a000e79


console.log('<<< Convert a String to a Number! >>>')
// We need a function that can transform a string into a
// number.What ways of achieving this do you know ?

function stringToNumber(str) {
    result = Number(str);
    return result;
}
console.log(stringToNumber("1234"))

console.log('-------------------------');

let stringToNumbers = function (str) {
    return parseInt(str);
}

console.log(stringToNumbers("1234"))
console.log('-------------------------');

let stringToNumberss = function (str) {
    return +str;
}

console.log(stringToNumberss("1234"))
console.log('-------------------------');

const stringToNumber1 = str => Number(str)

console.log(stringToNumber1("1234"))

console.log('-------------------------');
