https://www.codewars.com/kata/55f73be6e12baaa5900000d4


// Grasshopper - Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of
//  goals in all three leagues.

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    messigoalsSum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return messigoalsSum;
}

console.log(goals(20, 30, 40))

console.log('-------------------------');
