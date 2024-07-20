// Sentence Smash

// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'
// Write a function that takes an array of words and smashes
//  them together into a sentence and returns the sentence.
//  You can ignore any need to sanitize words or add punctuation,
//   but you should add spaces between each word.Be careful,
//    there shouldn't be a space at the beginning or the 
//    end of the sentence!

function smash(words) {
    return words.join(" ");

};
console.log(smash(['hello', 'world', 'this', 'is', 'great']))
console.log('-------------------------');

function smash(words) {
    let smashed = '';
    for (let i = 0; i < words.length; i++) {
        smashed += words[i];
        if (i != words.length - 1) {
            smashed += ' ';
        }
    }
    return smashed;
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
console.log('-------------------------');

smash = function (words) {
    return words.join(" ");
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
console.log('-------------------------');