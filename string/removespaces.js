// Remove String Spaces


/* Write a function that removes the spaces from the string, 
then return the resultant string.
*/

function noSpace(x) {
    return x.replaceAll(' ', '')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

console.log('-------------------------');


function noSpace(x) {
    return x.replace(/\s/g, '');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
console.log('-------------------------');

function noSpace(x) { return x.split(' ').join('') };

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
console.log('-------------------------');

function noSpace(x) {
    let result = ""
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            result += x[i];
        }
    }
    return result;
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));