// If you can't sleep, just count sheep!!


// Given a non - negative integer, 3 for example, return a
// string with a murmur:
// "1 sheep...2 sheep...3 sheep...".Input will always be valid,
//  i.e.no negative integers.

function countSheep(num) {
    let sheepSum = '';
    for (let i = 1; i <= num; i++) {
        sheepSum += i.toString() + ' sheep...';
    }
    return sheepSum;
}

console.log(countSheep(4));

console.log('-------------------------');

countSheep = n => [...Array(n).keys()].map(x => `${x + 1} sheep...`).join``;
console.log(countSheep(10));
console.log('-------------------------');

const countSheep1 = length =>
    Array.from({ length }, (_, i) => ++i + ' sheep...').join('');

console.log(countSheep1(11));
console.log('-------------------------');