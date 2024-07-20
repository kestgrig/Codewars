function invert(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * (-1);
    }
    return array;
}

console.log((invert([1, 2, 3, 4, 5])), [-1, -2, -3, -4, -5]);
console.log((invert([1, -2, 3, -4, 5])), [-1, 2, -3, 4, -5]);
console.log((invert([])), []);
console.log((invert([0])), [0]);

console.log('---------------');

function invert(array) {
    return array.map(x => x === 0 ? x : -x);
}


console.log((invert([1, 2, 3, 4, 5])), [-1, -2, -3, -4, -5]);
console.log((invert([1, -2, 3, -4, 5])), [-1, 2, -3, 4, -5]);
console.log((invert([])), []);

console.log('---------------');

function invert(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(-array[i]);
    }
    return newArr;
}


console.log((invert([1, 2, 3, 4, 5])), [-1, -2, -3, -4, -5]);
console.log((invert([1, -2, 3, -4, 5])), [-1, 2, -3, 4, -5]);
console.log((invert([])), []);
console.log((invert([0])), [0]);

console.log('---------------');

function invert(array) {
    return array.map(i => 0 - i);
}


console.log((invert([1, 2, 3, 4, 5])), [-1, -2, -3, -4, -5]);
console.log((invert([1, -2, 3, -4, 5])), [-1, 2, -3, 4, -5]);
console.log((invert([])), []);
console.log((invert([0])), [0]);