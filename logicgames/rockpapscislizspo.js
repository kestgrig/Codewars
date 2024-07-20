// https://www.codewars.com/kata/57d29ccda56edb4187000052

function rpsls(pl1, pl2) {
    if ((pl1 === 'rock') && (pl2 === 'lizard')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'scissors') && (pl2 === 'lizard')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'paper') && (pl2 === 'rock')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'lizard') && (pl2 === 'paper')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'spock') && (pl2 === 'rock')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'rock') && (pl2 === 'scissors')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'paper') && (pl2 === 'spock')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'scissors') && (pl2 === 'paper')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'lizard') && (pl2 === 'spock')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'spock') && (pl2 === 'scissors')) {
        return 'Player 1 Won!';
    } else if ((pl1 === 'scissors') && (pl2 === 'spock')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'paper') && (pl2 === 'lizard')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'rock') && (pl2 === 'spock')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'lizard') && (pl2 === 'scissors')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'spock') && (pl2 === 'lizard')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'scissors') && (pl2 === 'rock')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'spock') && (pl2 === 'paper')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'rock') && (pl2 === 'paper')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'paper') && (pl2 === 'scissors')) {
        return 'Player 2 Won!';
    } else if ((pl1 === 'lizard') && (pl2 === 'rock')) {
        return 'Player 2 Won!';
    } else if (pl1 === pl2) {
        return 'Draw!';
    }
}

console.log(rpsls('scissors', 'lizard'));
console.log(rpsls('lizard', 'paper'));
console.log(rpsls('scissors', 'spock'));
console.log(rpsls('rock', 'spock'));
console.log(rpsls('rock', 'rock'));

console.log('-----------------');

const MATCH = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
};

function rpsls1(pl1, pl2) {
    return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
        MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';

}

console.log(rpsls('scissors', 'lizard'));
console.log(rpsls('lizard', 'paper'));
console.log(rpsls('scissors', 'spock'));
console.log(rpsls('rock', 'spock'));
console.log(rpsls('rock', 'rock'));

console.log('-------------------------');