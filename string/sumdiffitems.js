https://www.codewars.com/kata/5704aea738428f4d30000914/solutions/javascript?filter=following&sort=best_practice&invalids=false

// E.g.Input: "aa", "bb", "cc" => Output: "abcabc"

function tripleTrouble(one, two, three) {
    let sum = ''
    for (let i = 0; i < one.length; i++) {
        sum += one[i] + two[i] + three[i];
    }
    return sum
}
console.log(tripleTrouble('aaa', 'bbb', 'ccc'))

console.log('-------------------------');

