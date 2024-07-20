https://www.codewars.com/kata/5861d28f124b35723e00005e


function zeroFuel(milesleft, mph, gallonsleft) {
    if ((mph * gallonsleft) >= milesleft) {
        return true;
    } else {
        return false;
    }
}
console.log(zeroFuel(100, 20, 2));
console.log(zeroFuel(10, 20, 2));

console.log('-------------------------');

const zeroFuel1 = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
};

console.log('-------------------------');

const zeroFuel2 = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

console.log('-------------------------');

