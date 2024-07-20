// Beginner Series #1 School Paperwork

/* Your classmates asked you to copy some paperwork for them.
You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need.
If n < 0 or m < 0 return 0.
*/
function paperwork(n, m) {
    const answer = n * m

    if (n < 0 || m < 0) {
        return 0
    }
    return answer;
}

console.log(paperwork(5, 5));

console.log('-------------------------');

function paperwork(n1, m1) {
    return n1 > 0 && m1 > 0 ? n1 * m1 : 0
}

console.log(paperwork(5, 5));
console.log('-------------------------');

paperwork = (n2, m2) => n2 < 0 || m2 < 0 ? 0 : n2 * m2
console.log(paperwork(5, 5));
