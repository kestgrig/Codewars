console.log('<<< Powers of 2 >>>');

// Powers of 2
// Complete the function that takes a non - negative integer n
//  as input, and returns a list of all the
// powers of 2 with the exponent ranging from 0 to n(inclusive)

function powersOfTwo(n) {
    const numberCount = [];
    for (let i = 0; i <= n; i++) {
        numberCount.push(2 ** i);
    }
    return numberCount
}

console.log(powersOfTwo(5))
console.log()
