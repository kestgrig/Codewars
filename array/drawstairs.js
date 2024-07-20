// Draw stairs



/* Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
 For example n = 3 result in:
 "I\n I\n  I"
*/

function drawStairs(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result[i] = `${' '.repeat(i)}I`;
    }

    return result.join('\n');
}
console.log(drawStairs(7));
console.log('-------------------------');

const drawStairs1 = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
console.log(drawStairs1(3));

console.log('-------------------------');


const drawStairs2 = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");

console.log(drawStairs1(10));

console.log('-------------------------');


