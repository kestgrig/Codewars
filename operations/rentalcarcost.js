function rentalCarCost(d) {
    if (d < 3) {
        return d * 40;
    } else if (d >= 3 && d < 7) {
        return (d * 40) - 20;
    } else if (d >= 7) {
        return (d * 40) - 50;
    }
}


console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(8), 270);
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);

console.log('------------');

function baseCost(days, rate) {
    return days * rate;
}

function discountRate(days) {
    if (days >= 7) {
        return 50;
    }
    else if (days >= 3) {
        return 20;
    }
    else {
        return 0;
    }
}

function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
}

console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(8), 270);
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);

console.log('------------');

const rentalCarCost1 = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));




