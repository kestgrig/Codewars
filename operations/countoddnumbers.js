https://www.codewars.com/kata/59342039eb450e39970000a6/solutions/javascript

function oddCount(n) {
    return Math.floor(n / 2);
}

console.log(oddCount(10));
console.log('-------------------------');

function oddCount(n) {
    let count = 0;
    if (n % 2 == 1) {
        count = (n - 1) / 2;
    } else {
        count = n / 2;
        return count;
    }
}

console.log(oddCount(100));