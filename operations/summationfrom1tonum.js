https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/javascript

console.log('<<< Grasshopper - Summation >>>')

// Summation
// Write a program that finds the summation of every 
// number from 1 to num.The number will always be a 
// positive integer greater than 0. Your function only
//  needs to return the result, what is shown between 
//  parentheses in the example below is how you reach 
//  that result and it's not part of it, see the sample tests.


function summation(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(7));

console.log('-------------------------');

const summation1 = n => n * (n + 1) / 2;

console.log('-------------------------');

function summation(num) {
    return num * (num + 1) / 2
}

console.log(summation(7));

console.log('-------------------------');