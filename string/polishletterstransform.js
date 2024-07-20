// Polish alphabet


/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.
For example:
"Jędrzej Błądziński"  -- > "Jedrzej Bladzinski"

*/

function polish(string) {
    const polishAbc = 'ąćęłńóśźż';
    const normalAbc = 'acelnoszz';
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];    //ę
        //kur sedi 'ę'? -> polishABC -> index 2
        let index = -1;
        for (let j = 0; j < polishAbc.length; j++) {
            const polishLetter = polishAbc[j];
            if (polishLetter === letter) {
                result += normalAbc[j];
                index = j;
            }
        }
        if (index === -1) {
            result += letter;
        }
    }
    return result;
}

console.log('Jędrzej Błądziński' + ' ' + '>>>' + ' ' + polish('Jędrzej Błądziński'));
console.log('Lech Wałęsa' + ' ' + '>>>' + ' ' + polish('Lech Wałęsa'));
console.log('Maria Skłodowska-Curie' + ' ' + '>>>' + ' ' + polish('Maria Skłodowska-Curie'));


console.log('-------------------------');

function correctPolishLetters(string) {
    var dict = { 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' };
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}

console.log('-------------------------');

var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters(string) {
    return string.split('').map((c) => polishLetters[c] || c).join("");
}

