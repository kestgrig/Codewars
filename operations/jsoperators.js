




function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function mod(a, b) {
    return a % b;
}

function exponent(a, b) {
    return a ** b
}

function subt(a, b) {
    return a - b;
}

console.log(add(1, 2), 3)
console.log(multiply(1, 2), 2)
console.log(divide(2, 1), 2)
console.log(mod(1, 2), 1)
console.log(exponent(1, 2), 1)
console.log(subt(1, 2), -1)





console.log('-------------------------');


console.log('<<<<Basic Mathematical Operations>>>>');

/* Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string / char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2)-- > output
('+', 4, 7)-- > 11
('-', 15, 18)-- > -3
('*', 5, 5)-- > 25
('/', 49, 7)-- > 7
*/

function basicOp(operation, value1, value2) {
    let Op = '';
    if (operation === '/') {
        Op = value1 / value2;
    } else if (operation === '*') {
        Op = value1 * value2;
    } else if (operation === '+') {
        Op = value1 + value2;
    } else if (operation === '-') {
        Op = value1 - value2;
    }
    return Op;
}

console.log(basicOp('*', 10, 8));
console.log(basicOp('/', 70, 7));
console.log(basicOp('+', 5, 5));
console.log(basicOp('-', 5, 5));

console.log('-------------------------');

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

console.log('-------------------------');

function basicOp(o, a, b) {
    return eval(a + o + b);
}

