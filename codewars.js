function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}
console.log(removeExclamationMarks('Hello world!'));

console.log('-------------------------');
console.log('<<< Reversed Strings >>>');

function solution(str) {
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        answer += str[str.length - 1 - i];
    }
    return answer;
}
console.log(solution('vakaras'));

console.log('-------------------------');

function getLength(arr) {
    //return length of arr
    return arr.length
}
function getFirst(arr) {
    //return the first element of arr
    return arr[0]
}
function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1]
}
function pushElement(arr) {
    var el = 1;
    //push el to arr

    return arr.push(el)
}
function popElement(arr) {
    //pop an element from arr

    return arr.pop()
}

console.log(getLength([1, 2, 3]), 3);
console.log(getFirst([1, 2, 3]), 1);
console.log(getLast([1, 2, 3]), 3);
console.log(pushElement([1, 2, 3]).length, 4);
console.log(popElement([1, 2, 3]).length, 2);

function animal(obj) {
    const object = { name: '', legs: '', color: '' };
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
console.log(animal({ name: "rabbit", legs: 4, color: "gray" }))

function trueOrFalse(val) {
    if (val) return "true";
    else return "false";
}
const t = true, f = false;
console.log(trueOrFalse(t ^ t), "false");
console.log(trueOrFalse(t ^ f), "true");
console.log(trueOrFalse(true), "true");
console.log(trueOrFalse(123), "true");
console.log(trueOrFalse("123"), "true");
console.log(trueOrFalse(["123"]), "true");
console.log(trueOrFalse("false"), "true");
console.log(trueOrFalse(false), "false");
console.log(trueOrFalse(0), "false");
console.log(trueOrFalse(""), "false");
console.log(trueOrFalse(null), "false");
console.log(trueOrFalse([].length), "false");
console.log(trueOrFalse(undefined), "false");

function saleHotdogs(n) {
    if (n < 5) {
        return n * 100;
    } else if (n >= 5 && n < 10) {
        return n * 95;
    } else if (n >= 10) {
        return n * 90;
    }
}
console.log(saleHotdogs(1), 100);
console.log(saleHotdogs(4), 400);
console.log(saleHotdogs(5), 475);
console.log(saleHotdogs(9), 855);
console.log(saleHotdogs(10), 900);
console.log(saleHotdogs(100), 9000);

function howManydays(month) {
    let days;
    switch (month) {
        case 2:
            days = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        default:
            days = 31;
    }
    return days;
}

console.log(howManydays(1), 31);
console.log(howManydays(2), 28);
console.log(howManydays(3), 31);
console.log(howManydays(4), 30);
console.log(howManydays(12), 31);

// function howManydays(month) {
//     switch (month) {
//         case 2: return 28
//         case 4: case 6: case 9: case 11: return 30
//         default: return 31
//     }
// }

function padIt(str, n) {
    let answer1 = str;
    let i = 0;
    while (i < n) {
        if (n % 2 === 1) {
            answer1 = '*' + answer1;
        } else {
            answer1 = answer1 + '*';
        }

        n--
    }
    return answer1
}

console.log(padIt("a", 1), "*a");
console.log(padIt("a", 2), "*a*");
console.log(padIt("a", 3), "**a*");
console.log(padIt("a", 4), "**a**");
console.log(padIt("a", 5), "***a**");


function pickIt(arr) {
    var odd = [], even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 1) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return [odd, even];
}
console.log(pickIt([1, 2]), [[1], [2]]);
console.log(pickIt([1, 2, 3]), [[1, 3], [2]]);
console.log(pickIt([3, 2, 1]), [[3, 1], [2]]);
console.log(pickIt([10, 20, 30]), [[], [10, 20, 30]]);
console.log(pickIt([11, 21, 31]), [[11, 21, 31], []]);
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]), [[1, 5, 1, 1], [8, 4, 6]]);

function grabDoll(dolls) {
    var bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
            bag.push(dolls[i]);
        } else continue;
        if (bag.length === 3) break;
    }
    return bag;
}
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), ["Hello Kitty"]);
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Hello Kitty", "Hello Kitty"]);
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]), ["Hello Kitty", "Hello Kitty", "Barbie doll"]);
console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Barbie doll", "Hello Kitty", "Hello Kitty"]);


function repeatStr(n, s) {
    result = s.repeat(n);
    return result;
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");

function numberToString(num) {
    result = num.toString();
    return result;
}

console.log(numberToString(67), '67');

function logs(x, a, b) {
    let c = Math.log(a);

    result = c * a + c * b;
    return result
}

console.log(logs(10, 2, 3), 0.7781512503836435);
console.log(logs(5, 2, 3), 1.1132827525593785);
console.log(logs(1000, 2, 3), 0.25938375012788123);

function abbrevName(name) {
    let [nam, surnam] = name.split(' ');
    initial = nam[0].toUpperCase(0) + '.' + surnam[0].toUpperCase(1)

    return initial;
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const average = sum / array.length;
    return average;
}

console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);

function findSmallestInt(arr) {

    return (Math.min(...arr))

}

console.log(findSmallestInt([78, 56, 232, 12, 8]), 8, `findSmallestInt([78,56,232,12,8])`);
console.log(findSmallestInt([78, 56, 232, 12, 18]), 12, `findSmallestInt([78,56,232,12,18])`);
console.log(findSmallestInt([78, 56, 232, 412, 228]), 56, `findSmallestInt([78,56,232,412,228])`);
console.log(findSmallestInt([78, 56, 232, 12, 0]), 0, `findSmallestInt([78,56,232,12,0])`);
console.log(findSmallestInt([1, 56, 232, 12, 8]), 1, `findSmallestInt([1,56,232,12,8])`);

function evenOrOdd(number) {
    if ((number) % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd"
    }
    return result;
}
console.log(evenOrOdd(2), "Even")
console.log(evenOrOdd(-441), "Odd")

function fakeBin(x) {
    let answer = '';
    for (let i = 0; i < x.length; i++) {

        result = x[i].replaceAll(x[i] < 5, '5');
    }
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

function square(x) {
    return x ** 2;
}
console.log(square(3), 9);

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Jane"), "Hello, Jane!");
console.log(greet("Simon"), "Hello, Simon!");
console.log(greet("Johnny"), "Hello, my love!");

function problem(x) {
    if (typeof (x) === 'string') {
        return 'Error';
    } else {
        return (50 * x) + 6;
    }
}

console.log(problem("hello"), "Error");
console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);
console.log(problem(1.2), 66);
console.log(problem(3), 156);
console.log(problem("RyanIsCool"), "Error");
console.log(problem(-3), -144);
console.log(problem(""), "Error");
console.log(problem(0.03), 7.5);

function greet(x) {
    return "hello world!";
}
console.log(greet(), "hello world!");

function arrayPlusArray(arr1, arr2) {
    let suma = 0;
    let suma2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        suma += arr1[i];
        result1 = suma;
    }

    for (let i = 0; i < arr2.length; i++) {
        suma2 += arr2[i];
        result2 = suma2;
    }

    return result1 + result2; //something went wrong
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

function sum(numbers) {
    let suma = 0;
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }
    return suma
}
console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);



function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function mod(a, b) {
    return a % b;
}

function exponent(a, b) {
    return a ** b
}

function subt(a, b) {
    return a - b;
}

console.log(add(1, 2), 3)
console.log(multiply(1, 2), 2)
console.log(divide(2, 1), 2)
console.log(mod(1, 2), 1)
console.log(exponent(1, 2), 1)
console.log(subt(1, 2), -1)

function combineNames(name, surname) {

    fullName = name + ' ' + surname
    return fullName
}

console.log(combineNames('James', 'Stevens'), 'James Stevens')

function sumMix(x) {
    x = x.map(Number);
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);

function well(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            sum++;
        }
    }
    if (sum === 0) {
        return 'Fail!';
    } else if (0 < sum && sum <= 2) {
        return 'Publish!'
    } else if (sum > 2) {
        return 'I smell a series!';
    }
}

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'good', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

function getPlanetName(id) {
    let name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
    }

    return name;
}

console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');

function toNumberArray(stringarray) {
    stringarray = stringarray.map(Number);
    return stringarray;
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]), [1.1, 2.2, 3.3]);

function check(a, x) {
    result = a.includes(x);
    return result;
}


console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

function bmi(weight, height) {
    let ans = 0;
    ans = weight / (height ** 2);
    if (ans <= 18.5) {
        result = "Underweight";
    } else if (ans <= 25.0) {
        result = "Normal";
    } else if (ans <= 30.0) {
        result = "Overweight";
    } else if (ans > 30.0) {
        result = "Obese";
    }
    return result;
}

console.log(bmi(80, 1.80), "Normal");
console.log(bmi(50, 1.80), "Underweight");
console.log(bmi(90, 1.80), "Overweight");
console.log(bmi(140, 1.80), "Obese");

function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}

console.log(buildString('Cheese', 'Milk', 'Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
console.log(buildString('Cheese', 'Milk'), 'I like Cheese, Milk!', 'Return the correct String');
console.log(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');

function positiveSum(arr) {
    let sum = 0;
    let i = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
        sum += arr[i];
    }
    return sum
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);


function arrayMadness(a, b) {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < a.length; i++) {
        count1 += (a[i] ** 2);
    }
    for (let i = 0; i < b.length; i++) {
        count2 += (b[i] ** 3);
    }
    if (count1 > count2) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]), true);
console.log(arrayMadness([5, 6, 7], [4, 5, 6]), false);
console.log(arrayMadness([4, 5, 6], [3, 4, 5]), false);
console.log(arrayMadness([3, 4, 5], [2, 3, 4]), false);
console.log(arrayMadness([2, 3, 4], [1, 2, 3]), false);
console.log(arrayMadness([1, 2, 3], [0, 1, 2]), true);
console.log(arrayMadness([5, 3, 2, 4, 1], [15]), false);
console.log(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]), false);
console.log(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]), false);
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]), true);
console.log(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]), false);

function strCount(str, letter) {
    result = str.split(letter).length - 1;
    return result;
}

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);

function testEven(n) {
    if ((n % 2) === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");

function differenceInAges(ages) {

    min = Math.min(...ages);
    max = Math.max(...ages);
    difage = max - min;

    return [min, max, difage];
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

function getDrinkByProfession(param) {
    let name;
    let param2 = param.toLowerCase();
    switch (param2) {
        case "jabroni":
            name = "Patron Tequila"
            break;
        case "school counselor":
            name = "Anything with Alcohol"
            break;
        case "programmer":
            name = "Hipster Craft Beer"
            break;
        case "bike gang member":
            name = "Moonshine"
            break;
        case "politician":
            name = "Your tax dollars"
            break;
        case "rapper":
            name = "Cristal"
            break;
        default:
            name = "Beer"
    }
    return name;
}

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let currentBlue = blueStart - bluePulled;
    let currentRed = redStart - redPulled;
    return currentBlue / (currentBlue + currentRed);
}

console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);

function litres(time) {
    const litres = 0.5;
    let count = 0;
    count = time * litres;
    count = Math.floor(count);
    return count;
}
console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');

function areaOrPerimeter(l, w) {

    if (l === w) {
        result = l * w;
    } else if (l != w) {
        result = (l + w) * 2;
    }
    return result;
}

console.log(areaOrPerimeter(3, 3), 9);
console.log(areaOrPerimeter(6, 10), 32);


function century(year) {
    return Math.ceil(year / 100)
}

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');

function countSheeps(sheep) {
    let ans = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            ans++;
        }
    }
    return ans
}

function enough(cap, on, wait) {

    if (cap < (on + wait)) {
        result = (on + wait) - cap;
    } else {
        result = 0;
    }

    return result;
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');

}

console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
console.log(reverseWords("foobar"), "foobar")
console.log(reverseWords("kata editor"), "editor kata")
console.log(reverseWords("row row row your boat"), "boat your row row row")
console.log(reverseWords(""), "")

function findDifference(a, b) {
    let suma = 0;
    let suma2 = 0;
    for (let i = 0; i < a.length; i++) {
        result = a[0] * a[1] * a[2];
        result1 = b[0] * b[1] * b[2];
        if (result >= result1) {
            return result - result1;
        } else if (result < result1) {
            return result1 - result;
        }
    }
}

console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);

function addLength(str) {
    let sum = str.split(' ');
    let abs = [];
    for (let i = 0; i < sum.length; i++) {
        abs.push(sum[i] + " " + sum[i].length)
    }
    return abs
}

function switchItUp(number) {
    let name;
    switch (number) {
        case 0:
            name = 'Zero'
            break;
        case 1:
            name = 'One'
            break;
        case 2:
            name = 'Two'
            break;
        case 3:
            name = 'Three'
            break;
        case 4:
            name = 'Four'
            break;
        case 5:
            name = 'Five'
            break;
        case 6:
            name = 'Six'
            break;
        case 7:
            name = 'Seven'
            break;
        case 8:
            name = 'Eight'
            break;
        case 9:
            name = 'Nine'
            break;
    }

    return name;
}

console.log(switchItUp(0), "Null");
console.log(switchItUp(1), "One");
console.log(switchItUp(2), "Two");
console.log(switchItUp(3), "Three");
console.log(switchItUp(4), "Four");
console.log(switchItUp(5), "Five");
console.log(switchItUp(6), "Six");
console.log(switchItUp(7), "Seven");
console.log(switchItUp(8), "Eight");
console.log(switchItUp(9), "Nine");


function simpleMultiplication(number) {
    let sq = 0;
    const a = 8;
    const b = 9;
    if (number % 2 === 0) {
        sq = number * a;
    } else {
        sq = number * b;
    }
    return sq;
}


console.log(simpleMultiplication(2), 16, 'Should return given argument times eight...')
console.log(simpleMultiplication(1), 9, 'Should return given argument times nine...')
console.log(simpleMultiplication(8), 64, 'Should return given argument times eight...')
console.log(simpleMultiplication(4), 32, 'Should return given argument times eight...')
console.log(simpleMultiplication(5), 45, 'Should return given argument times nine...')


function xor(a, b) {
    if (a === false && b === false) {
        return false;
    } else if (a === true && b === false) {
        return true;
    } else if (a === false && b === true) {
        return true;
    } else {
        return false;
    }
}

console.log(xor(false, false), false, "false xor false");
console.log(xor(true, false), true, "true xor false");
console.log(xor(false, true), true, "false xor true");
console.log(xor(true, true), false, "true xor true");
console.log(xor(true, true), !true, "true xor true: 'xor' is NOT identical to 'or'");

function grow(x) {
    let ans = 1;
    for (let i = 0; i < x.length; i++) {
        ans *= x[i];
    }
    return ans;
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);

function checkAlive(health) {
    if (health > 0) {
        return true
    } else {
        return false
    }
}

console.log(checkAlive(5), true)
console.log(checkAlive(0), false)

function capitalizeWord(word) {
    let a = word.split('')
    b = word.replace(a[0], a[0].toUpperCase());
    answer = b;
    return answer;
}

console.log(capitalizeWord('word'), 'Word');
console.log(capitalizeWord('i'), 'I');
console.log(capitalizeWord('glasswear'), 'Glasswear');


function position(letter) {
    const alphabeth = 'abcdefghijklmnopqrstuvwxyz';
    alpha = alphabeth.search(letter) + 1;
    return 'Position of alphabet: ' + alpha;
}



console.log(position("a"), "Position of alphabet: 1");
console.log(position("z"), "Position of alphabet: 26");
console.log(position("e"), "Position of alphabet: 5");

function setAlarm(employed, vacation) {
    if (employed === true && vacation === false) {
        return true;
    } else {
        return false;
    }
}

console.log(setAlarm(true, true), false, "Should be false.");
console.log(setAlarm(false, true), false, "Should be false.");
console.log(setAlarm(true, false), true, "Should be true.");


function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy';
    } else if (old < 18 && old >= 14) {
        return 'drink coke';
    } else if (old < 21 && old >= 18) {
        return 'drink beer';
    } else {
        return 'drink whisky';
    }
}

console.log(peopleWithAgeDrink(22), 'drink whisky');
console.log(peopleWithAgeDrink(8), 'drink toddy');
console.log(peopleWithAgeDrink(18), 'drink beer');
console.log(peopleWithAgeDrink(16), 'drink coke');


function createArray(number) {
    const newArray = [];
    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(createArray(1), [1]);
console.log(createArray(2), [1, 2]);
console.log(createArray(3), [1, 2, 3]);
console.log(createArray(4), [1, 2, 3, 4]);
console.log(createArray(5), [1, 2, 3, 4, 5]);


var a = "code";
var b = "wa.rs";
name = a + b;

console.log(name, "codewa.rs");


function evalObject(value) {
    let result;
    switch (value.operation) {
        case '+':
            result = value.a + value.b
            break;
        case '-':
            result = value.a - value.b;
            break;
        case '/':
            result = value.a / value.b;
            break;
        case '*':
            result = value.a * value.b;
            break;
        case '%':
            result = value.a % value.b;
            break;
        case '^':
            result = Math.pow(value.a, value.b);
    }
    return result;
}

console.log(evalObject({ a: 1, b: 1, operation: '+' }), 2, 'Return the evaluated string as a number!');
console.log(evalObject({ a: 1, b: 1, operation: '-' }), 0, 'Return the evaluated string as a number!');
console.log(evalObject({ a: 1, b: 1, operation: '/' }), 1, 'Return the evaluated string as a number!');
console.log(evalObject({ a: 1, b: 1, operation: '*' }), 1, 'Return the evaluated string as a number!');
console.log(evalObject({ a: 1, b: 1, operation: '%' }), 0, 'Return the evaluated string as a number!');
console.log(evalObject({ a: 1, b: 1, operation: '^' }), 1, 'Return the evaluated string as a number!');


const solve = (x, y) => x / y;

console.log(solve(2, 1), 2);
console.log(solve(2, 4), 0.5);
console.log(solve(42, 0), Infinity);
console.log(solve(0, 8), 0);
console.log(solve(7, 2), 3.5);
console.log(solve(4.2, 1), 4.2);
console.log(solve(9999, 11), 909);

items = []
items.push({ a: "b", c: "d" })


function rainAmount(mm) {
    if (mm < 40) {
        return `You need to give your plant ${40 - mm}mm of water`;
    } else {
        return `Your plant has had more than enough water for today!`;
    }
}

console.log(rainAmount(100), "Your plant has had more than enough water for today!");
console.log(rainAmount(30), "You need to give your plant ___mm of water");


function weatherInfo(temp) {
    let celsius = 0;
    celsius = (temp - 32) * (5 / 9);
    if (celsius > 0) {
        return `${celsius} is above freezing temperature`;
    } else {
        return `${celsius} is freezing temperature`
    }
}

console.log(weatherInfo(50), '10 is above freezing temperature');
console.log(weatherInfo(23), '-5 is freezing temperature');

function whatday(num) {
    let days;
    switch (num) {
        case 1:
            days = "Sunday";
            break;
        case 2:
            days = "Monday";
            break;
        case 3:
            days = "Tuesday";
            break;
        case 4:
            days = "Wednesday";
            break;
        case 5:
            days = "Thursday";
            break;
        case 6:
            days = "Friday";
            break;
        case 7:
            days = "Saturday";
            break;
        default:
            days = "Wrong, please enter a number between 1 and 7"
    }
    return days;
}

console.log(whatday(1), 'Sunday')
console.log(whatday(2), 'Monday')
console.log(whatday(3), 'Tuesday')
console.log(whatday(8), 'Wrong, please enter a number between 1 and 7')
console.log(whatday(20), 'Wrong, please enter a number between 1 and 7')


String.prototype.isUpperCase = function () {
    const str = '' + this;
    return str === str.toUpperCase();

}

console.log("", "isUpperCase", 'Must define the prototype isUpperCase')
console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
console.log('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
console.log('hello world'.isUpperCase(), false, 'hello world is not upper case');
console.log('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
console.log('hello World'.isUpperCase(), false, 'hello World is not upper case');
console.log('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
console.log('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
console.log('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
console.log('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
console.log('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
console.log('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
console.log('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
console.log('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
console.log('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
console.log('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
console.log('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
console.log('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');


function quadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    }
}

console.log(quadrant(8, 8));
console.log(quadrant(-8, 8));
console.log(quadrant(-5, -8));
console.log(quadrant(8, -8));

function validateHello(greetings) {
    let words;
    let greet = greetings.toLowerCase();
    switch (greet) {
        case 'hello':
            words = true;
            break;
        case 'ciao':
            words = true;
            break;
        case 'salut':
            words = true;
            break;
        case 'hallo':
            words = true;
            break;
        case 'hola':
            words = true;
            break;
        case 'ahoj':
            words = true;
            break;
        case 'czesc':
            words = true;
            break;
        default:
            words = false;

    }
    return words;
}

console.log(validateHello('labas'), false);
console.log(validateHello('czesc'), true);
console.log(validateHello('ahoj'), true);
console.log(validateHello('hola'), true);
console.log(validateHello('hallo'), true);
console.log(validateHello('salut'), true);
console.log(validateHello('ciao'), true);
console.log(validateHello('hello'), true);
console.log(validateHello('labdien'), false);
console.log(validateHello('sveiks'), false);
console.log(validateHello('meh'), false);

function quadratic(x1, x2) {
    let x = [1];
    result.push((x1 + x2) * -1);
    result.push(x1 * x2);

    return result;
}

function quadratic(x1, x2) {
    return [1, -(x1 + x2), x1 * x2]
}

const A = [
    [22, -6, 32, 82, 9, 25]
    [68, -1, 1, -7, 10, 10],
    [11, -11],
    [-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68],
    [28, 38, -44, -99, -13, -54, 77, -51],
    [-1, -49, -1, 67, 8, -60, 39, 35],
    [0, 2, 3, 6, 9],
];

function multipleOfIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            newArray.push(array[i]);
        } else if (array[0] = 0) {
            newArray.push(0);
        }
    }
    return newArray;
}

console.log(multipleOfIndex(A));
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([11, -11]));
console.log(multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]));
console.log(multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51]));
console.log(multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35]));
console.log(multipleOfIndex([0, 2, 3, 6, 9]));

//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions/javascript

function maps(x) {
    let newMaps = [];
    for (let i = 0; i < x.length; i++) {
        newMaps.push(x[i] * 2);
    }
    return newMaps;
}

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/solutions/javascript


function monkeyCount(n) {
    let count = [];
    for (let i = 1; i <= n; i++) {
        count.push(i);
    }
    return count;
}

console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)), [1, 2, 3]);
console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

console.log('-----------------');

//https://www.codewars.com/kata/5a34b80155519e1a00000009/javascript

function multipleOfIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0 || array[i] === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));


multipleOfIndex = array => array.filter((element, index) => element % index == 0 || element == 0)

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));


function contamination(text, char) {
    const f = text.length;
    console.log(f)
    let result = char.repeat(f);
    return result;

}

console.log(contamination("abc", "z"), "zzz");
console.log(contamination("", "z"), "");
console.log(contamination("abc", ""), "");
console.log(contamination("_3ebzgh4", "&"), "&&&&&&&&");
console.log(contamination("//case", " "), "      ");

function findNeedle(haystack) {
    aw = haystack.indexOf("needle");

    return "found the needle at position" + aw;
}

const hhh = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];
console.log(findNeedle(hhh), 'found the needle at position 30');

function booleanToString(b) {
    let str = ' ';
    if (b === true) {
        return 'true';
    } else if (b === false) {
        return 'false';
    }
}

function updateLight(current) {
    if (current === "green") {
        return "yellow";
    } else if (current === "yellow") {
        return "red";
    } else if (current === "red") {
        return "green";
    }

}

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");


function checkForFactor(base, factor) {
    if (base % factor === 0) {
        return true;
    } else {
        return false
    }
}


console.log(checkForFactor(10, 2), true)
console.log(checkForFactor(63, 7), true)
console.log(checkForFactor(2450, 5), true)
console.log(checkForFactor(24612, 3), true)
console.log(checkForFactor(9, 2), false)
console.log(checkForFactor(2453, 5), false)
console.log(checkForFactor(24617, 3), false)


function getAverage(marks) {
    let marksAverage = 0;
    for (let i = 0; i < marks.length; i++) {
        marksAverage += marks[i];
        ret = marksAverage / marks.length;
        ret1 = Math.floor(ret);
    }
    return ret1;
}

console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5,]), 3);
console.log(getAverage([9, 4, 5, 11, 19, 10, 2, 6, 2]), 8);


function getMax1() {
    let max = {
        name: 'Max Headroom'
    };
    return max;
}

function getMax2() {
    return {
        name: 'Max Headroom'
    };
}

function validateHello(greetings) {
    const dict = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    greetings = greetings.toLowerCase();
    for (const word of dict) {
        if (greetings.includes(word)) { // patikrina ar yra atitikmuo tekste
            return true;
        }
    }
    return false;
}


function _if(bool, func1, func2) {
    func1 = true;
    func2 = false;
    if (typeof bool === 'boolean' && bool === true) {
        return func1
    } else if (typeof bool === 'boolean' && bool === false) {
        return func2
    } else if (typeof bool !== 'boolean' && bool === true) {
        return func1 + 'function has not been called'
    } else if (typeof bool !== 'boolean' && bool === false) {
        return func2 + 'function has not been called'
    }
}

function sixToast(num) {
    ans = num - 6;
    ans = Math.abs(ans)
    return ans
}

console.log(sixToast(6), 0);
console.log(sixToast(17), 11);
console.log(sixToast(3), 3);

function pillars(numPill, dist, width) {
    if (numPill > 1) {
        ans = ((numPill - 1) * (dist * 100)) + ((numPill - 2) * width)
    } else {
        ans = 0;
    }
    return ans;
}

console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);


function seatsInTheater(nCols, nRows, col, row) {
    allSeats = nCols * nRows;
    positcol = (col - 1) * nRows;
    positrow = row * (nCols - (col - 1));
    result = allSeats - (positcol + positrow);
    return result;
}

console.log(seatsInTheater(16, 11, 5, 3), 96)
console.log(seatsInTheater(1, 1, 1, 1), 0)
console.log(seatsInTheater(13, 6, 8, 3), 18)
console.log(seatsInTheater(60, 100, 60, 1), 99)
console.log(seatsInTheater(1000, 1000, 1000, 1000), 0)

console.log("----------")

function removeEveryOther(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]), [['Goodbye']]);


function betterThanAverage(classPoints, yourPoints) {
    let countnumb = 0;
    for (let i = 0; i < classPoints.length; i++) {
        countnumb += classPoints[i];
        classPointsAverage = countnumb / classPoints.length;
        if (classPointsAverage < yourPoints) {
            ret = true;
        } else {
            ret = false;
        }
    }
    return ret;
}

console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);


function digitize(n) {
    arrr = String(n).split("").reverse().map(Number);
    return arrr;
}


console.log(digitize(348597));
console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(0), [0]);


function removeChar(str) {
    str = str.split('');
    str.shift();
    str.pop()
    return str.join("");
}

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');


function cubeChecker(volume, side) {
    if (side ** 3 === volume && volume > 0 && side > 0) {
        return true;
    } else {
        return false;
    }
}


console.log(cubeChecker(8, 3), false);
console.log(cubeChecker(8, 2), true);
console.log(cubeChecker(-8, -2), false);
console.log(cubeChecker(0, 0), false);
console.log(cubeChecker(1, 5), false);
console.log(cubeChecker(125, 5), true);


function chromosomeCheck(sperm) {
    if (sperm === 'XY') {
        return "Congratulations! You're going to have a son."
    } else {
        return "Congratulations! You're going to have a daughter."
    }
}


console.log(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
console.log(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")


function cookie(x) {
    if (typeof (x) === "string") {
        return `Who ate the last cookie? It was Zach!`;
    } else if (typeof (x) === 'number') {
        return `Who ate the last cookie? It was Monica!`;
    } else {
        return `Who ate the last cookie? It was the dog!`;
    }
}

console.log(cookie("Ryan"), "Who ate the last cookie? It was Zach!")
console.log(cookie(26), "Who ate the last cookie? It was Monica!")
console.log(cookie(2.3), "Who ate the last cookie? It was Monica!")
console.log(cookie(true), "Who ate the last cookie? It was the dog!")



function dutyFree(normPrice, discount, hol) {
    Sale = (normPrice * discount) / 100;
    ats = hol / Sale;
    return Math.floor(ats);
}

console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);


function _if(bool, func1, func2) {
    if (bool) {
        return func1();
    }
    return func2()

}


const firstname1 = {
    A: "Alpha",
    B: "Beta",
    C: "Cache",
    D: "Data",
    E: "Energy",
    F: "Function",
    G: "Glitch",
    H: "Half-life",
    I: "Ice",
    J: "Java",
    K: "Keystroke",
    L: "Logic",
    M: "Malware",
    N: "Nagware",
    O: "OS",
    P: "Phishing",
    Q: "Quantum",
    R: "RAD",
    S: "Strike",
    T: "Trojan",
    U: "Ultraviolet",
    V: "Vanilla",
    W: "WiFi",
    X: "Xerox",
    Y: "Y",
    Z: "Zero"
};

const surname1 = {
    A: "Analogue",
    B: "Bomb",
    C: "Catalyst",
    D: "Discharge",
    E: "Electron",
    F: "Faraday",
    G: "Gig",
    H: "Hacker",
    I: "IP",
    J: "Jabber",
    K: "Killer",
    L: "Lazer",
    M: "Mike",
    N: "n00b",
    O: "Overclock",
    P: "Payload",
    Q: "Quark",
    R: "Roy",
    S: "Spy",
    T: "T-Rex",
    U: "Unit",
    V: "Virus",
    W: "Worm",
    X: "X",
    Y: "Yob",
    Z: "Zombie"
};

function aliasGen(firstname, surname) {
    let firstLetterOfFirstName = firstname.charAt(0).toUpperCase();
    let firstLetterOfSurName = surname.charAt(0).toUpperCase();
    let name = ' ';
    let sur = ' ';
    let firstValues = Object.values(firstname1);
    let surValues = Object.values(surname1);
    if (isNaN(Number(firstLetterOfFirstName)) && isNaN(Number(firstLetterOfSurName))) {
        for (let i = 0; i < firstValues.length; i++) {
            if (firstValues[i].charAt(0).toUpperCase() === firstLetterOfFirstName)
                name = firstValues[i];
        }
        for (let i = 0; i < surValues.length; i++) {
            if (surValues[i].charAt(0).toUpperCase() === firstLetterOfSurName)
                sur = surValues[i];
        }
        return name + ' ' + sur;

    } else {
        return "Your name must start with a letter from A - Z.";
    }
}

console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");


function areYouPlayingBanjo(name) {
    for (let i = 0; i < name.length; i++) {
        if (name[0] === 'r' || name[0] === 'R') {
            return `${name} plays banjo`;
        } else {
            return `${name} does not play banjo`
        }
    }
    return name;
}

console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");


const bingoletters = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z"
};

function bingo(a) {
    let n = [2, 9, 14, 7, 15]
    for (let i = 0; i < n.length; i++) {
        if (!a.includes(n[i])) { return 'LOSE' }
    }
    return 'WIN'
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");


function symmetricPoint(p, q) {
    let newArrSimetry = [];
    for (let i = 0; i <= p.length; i++) {
        a = 2 * q[0] - p[0];
        a1 = 2 * q[1] - p[1];
        newArrSimetry = [a, a1];
    }
    return newArrSimetry;
}

console.log(symmetricPoint([0, 0], [1, 1]), [2, 2]);
console.log(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
console.log(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
console.log(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
console.log(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
console.log(symmetricPoint([0, 0], [0, 0]), [0, 0]);


function nearestSq(n) {
    let nearsq = Math.sqrt(n);
    let a = Math.round(nearsq);
    atsak = a ** 2;
    return atsak;
}

console.log(nearestSq(1), 1, "nearestSq(1) = 1");
console.log(nearestSq(2), 1, "nearestSq(2) = 1");
console.log(nearestSq(10), 9, "nearestSq(10) = 9");
console.log(nearestSq(111), 121, "nearestSq(111) = 121");
console.log(nearestSq(9999), 10000, "nearestSq(9999) = 10000");



function GeometricSequenceSum(a, r, n) {
    let sum = 0;
    if (r != 1) {
        sum = a * (1 - (r ** n)) / (1 - r);
    } else if (r = 1) {
        sum = a + a * r;
    }

    let roun = sum.toFixed(0);
    if (roun != sum) {
        return sum.toFixed(9);
    } else if (roun = sum) {
        return sum;
    }
    return sum;
}


console.log(GeometricSequenceSum(2, 3, 5), 242);
console.log(GeometricSequenceSum(1, 1, 2), 2);
console.log(GeometricSequenceSum(2, 2, 10), 2046);
console.log(GeometricSequenceSum(1, -2, 10), -341);
console.log(GeometricSequenceSum(1, 0.5, 10), 1.998046875);


function noBoringZeros(n) {
    let str = n.toString().split('');
    for (let i = str.length - 1; i >= 0; i--) {
        if (n === '0') {
            return '0';
        } else if (str[str.length - 1] === '0') {
            str.pop();
        } else {
            return +str.join('')
        }
    }
}

console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)



function sumEvenNumbers(input) {
    let numbersEvenSum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            numbersEvenSum += input[i];
        };
    }
    return numbersEvenSum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);


function integrate(coefficient, exponent) {
    let n = exponent + 1;
    let a = coefficient / n;
    return `${a}x^${n}`;
}

console.log(integrate(3, 2), "1x^3");
console.log(integrate(12, 5), "2x^6");
console.log(integrate(20, 1), "10x^2")
console.log(integrate(40, 3), "10x^4")
console.log(integrate(90, 2), "30x^3")


function derive(coefficient, exponent) {
    let n = exponent - 1;
    let a = coefficient * exponent;
    return `${a}x^${n}`;
}


console.log(derive(7, 8), "56x^7");
console.log(derive(5, 9), "45x^8");


function sc(floor) {
    let scsc = ' ';
    const aa = 'Aa~ ';
    const pa = 'Pa!';
    const aa1 = 'Aa!';

    if (floor <= 1) {
        return "";
    } else if (floor > 1 && floor <= 6) {
        scsc = aa.repeat(floor - 1);
        return `${scsc}${pa} ${aa1}`;
    } else if (floor > 6) {
        scsc = aa.repeat(floor - 1);
        return `${scsc}${pa}`;
    }

    return scsc;
}

console.log(sc(2), "|Aa~ Pa! Aa!", "good luck!");
console.log(sc(6), "|Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!");
console.log(sc(7), "|Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(10), "|Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(1), "", "good luck!");
console.log(sc(-1), "", "good luck!");


function makeUpperCase(str) {
    let word = str.toUpperCase();
    return word;
}

console.log(makeUpperCase(""), "");
console.log(makeUpperCase("hello"), "HELLO");
console.log(makeUpperCase("Hello"), "HELLO");
console.log(makeUpperCase("HELLO"), "HELLO");


function hoopCount(n) {
    if (n >= 10) {
        return 'Great, now move on to tricks';
    } else {
        return 'Keep at it until you get it';
    }
}

console.log(hoopCount(3), "Keep at it until you get it");
console.log(hoopCount(11), "Great, now move on to tricks");


function fuelPrice(litres, pricePerLitre) {
    if (litres >= 2 && litres < 4) {
        ats = (litres * (pricePerLitre - 0.05));
    } else if (litres >= 4 && litres < 6) {
        ats = (litres * (pricePerLitre - 0.1));
    } else if (litres >= 6 && litres <= 10) {
        ats = (litres * (pricePerLitre - 0.2));
    } else {
        ats = (litres * (pricePerLitre - 0.25));
    }
    return Number(ats.toFixed(2));
}

console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.40);
console.log(fuelPrice(5, 5.6), 27.50);
console.log(fuelPrice(3, 1.3), 3.75);



String.prototype.toAlternatingCase = function () {
    let str = '';
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toLowerCase()) {
            str += this[i].toUpperCase();
        } else {
            str += this[i].toLowerCase();
        }
    }
    return str;
}

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");



function combat(health, damage) {
    if (health > 0) {
        ats = (health - damage);
        if (ats < 0) {
            return 0;
        } else {
            return ats;
        }
    }
}

console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0, "Health cannot go below 0");

// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/solutions/javascript

function replace(s) {
    let str = '';
    let vowel = 'aeiouAEIOU';
    for (let i = 0; i < s.length; i++) {
        if (vowel.includes(s[i])) {
            str += '!';
        } else {
            str += s[i];
        }
    }
    return str;
}


console.log(replace("Hi!"), "H!!")
console.log(replace("!Hi! Hi!"), "!H!! H!!")
console.log(replace("aeiou"), "!!!!!")
console.log(replace("ABCDE"), "!BCD!")


// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/solutions/javascript

function cockroachSpeed(s) {
    let ats = 0;
    ats = s / 0.036;
    ats = Math.floor(ats);
    return ats;
}


console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);


// https://www.codewars.com/kata/65ba420888906c1f86e1e680/solutions/javascript

function collinearity(x1, y1, x2, y2) {
    k1 = x1 / x2;
    k2 = y1 / y2;
    if (k1 === k2) {
        return true;
    } else if (((x1 || x2) === 0) || ((y1 || y2) === 0)) {
        return true;
    } else {
        return false;
    }
}


function isToday(date) {
    return new Date().toDateString() == date.toDateString();

}


class Solution {
    static main() {
        console.log("Hello World!");
    }

}

// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Ryan"), "Hello, Ryan how are you doing today?");
console.log(greet("Shingles"), "Hello, Shingles how are you doing today?");


// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
    let newStr = '';
    str = str.split("");
    for (i = 0; i < str.length; i++) {
        newStr += (str[i].repeat(2));
        +i;
    }
    return newStr;
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");

// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
    dna = dna.replaceAll("T", "U");
    return dna;
}

console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")

// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

function sumStr(a, b) {
    a = Number(a);
    b = Number(b);
    result = a + b
    return result.toString();
}

console.log(sumStr("4", "5"), "9");
console.log(sumStr("34", "5"), "39");


function quarterOf(month) {
    let ans = 0;
    if (month === 1 || month === 2 || month === 3) {
        ans = 1;
    } else if (month === 4 || month === 5 || month === 6) {
        ans = 2;
    } else if (month === 7 || month === 8 || month === 9) {
        ans = 3;
    } else if (month === 10 || month === 11 || month === 12) {
        ans = 4;
    }
    return ans;
}

console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)
console.log(quarterOf(5), 2)


function warnTheSheep(queue) {

    queue = queue.reverse()

    for (let i = 0; i < queue.length; i++) {
        if (queue[i + 1] == 'wolf' && queue[i] == 'sheep') {
            return `Oi! Sheep number ${i + 1}! You are about to be eaten by a wolf!`
        }
        else if (queue[i] == 'wolf' && queue[i - 1] == undefined) {
            return 'Pls go away and stop eating my sheep'
        }
    }
}
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
    "Oi! Sheep number 2! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]),
    "Oi! Sheep number 5! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]),
    "Oi! Sheep number 6! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["sheep", "wolf", "sheep"]),
    "Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["wolf"]),
    "Pls go away and stop eating my sheep"
);
console.log(warnTheSheep(["sheep", "sheep", "wolf"]),
    "Pls go away and stop eating my sheep"
);