

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
