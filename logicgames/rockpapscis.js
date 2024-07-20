// https://www.codewars.com/kata/5672a98bdbdd995fad00000f


console.log('<<< Rock Paper Scissors >>>!');
// Let's play! You have to return which player won! In case
// of a draw return Draw!.

function rps(a, b) {
    if ((a === 'scissors') && (b === 'paper')) {
        return 'Player 1 won!';
    } else if ((a === 'rock') && (b === 'scissors')) {
        return 'Player 1 won!';
    } else if ((a === 'paper') && (b === 'rock')) {
        return 'Player 1 won!';
    } else if ((a === 'scissors') && (b === 'rock')) {
        return 'Player 2 won!';
    } else if ((a === 'paper') && (b === 'scissors')) {
        return 'Player 2 won!';
    } else if ((a === 'rock') && (b === 'paper')) {
        return 'Player 2 won!';
    } else if (a === b) {
        return 'Draw!';
    }
}

console.log(rps('rock', 'rock'));
console.log(rps('rock', 'paper'));
console.log(rps('paper', 'rock'));

console.log('-------------------------');

const rps1 = (p1, p2) => {
    switch (p1 + p2) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            return "Player 1 won!";
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            return "Player 2 won!";
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            return "Draw!";
    }
};

console.log(rps1('rock', 'rock'));

const rps2 = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};

console.log(rps1('paper', 'rock'));