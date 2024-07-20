// Beginner Series #2 Clock



// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since
//  midnight in milliseconds.

function past(h, m, s) {
    let hour = h * 60 * 60 * 1000;
    let min = m * 60 * 1000;
    let sec = s * 1000;
    const total1 = hour + min + sec;
    return total1;
}
console.log(past(4, 20, 20));

console.log('-------------------------')

function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}

console.log(past(4, 20, 20));
console.log('-------------------------')

const past1 = (h, m, s) => 1000 * (3600 * h + 60 * m + s);

console.log(past1(4, 20, 20));