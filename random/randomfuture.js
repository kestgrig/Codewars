https://www.codewars.com/kata/562e98755e9214cd2500003d/solutions/javascript


console.log('<<< A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future >>>');

function yourFutureCareer() {
    if (Math.random() < 0.32) {
        return 'FrontEnd Developer';
    } else if (Math.random() < 0.65) {
        return 'BackEnd Developer';
    } else {
        return 'Full-Stack Developer';
    }

}
console.log(yourFutureCareer())

