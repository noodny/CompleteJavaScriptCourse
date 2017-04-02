/**
 * Created by Krzysztof Bury on 26/03/2017.
 */
var ageFriend1 = 10;
var ageFriend2 = 20;
var ageFriend3 = 30;
var heightFriend1 = 100;
var heightFriend2 = 150;
var heightFriend3 = 200;

var gameResultsFriend1 = 5*ageFriend1 + heightFriend1;
var gameResultsFriend2 = 5*ageFriend2 + heightFriend2;
var gameResultsFriend3 = 5*ageFriend3 + heightFriend3;

// SOLUTION MY
// Friend 1 is winning check versus Friend3
if (gameResultsFriend1 > gameResultsFriend2) {
    if (gameResultsFriend1 > gameResultsFriend3) {
        console.log('Friend1 is the winner');
    } else if (gameResultsFriend1 == gameResultsFriend3) {
        console.log('Draw between Friend1 and Friend3');
    } else {
        console.log('Fiend3 is the winner');
    }
}
// Tie between Friend1 and Friend2
else if (gameResultsFriend1 == gameResultsFriend2) {
    if (gameResultsFriend1 > gameResultsFriend3) {
        console.log('Friend3 loose, Draw between Friend1 and Friend2');
    } else if (gameResultsFriend1 == gameResultsFriend3) {
        console.log('There is a draw between all the players.');
    } else {
        console.log('Fiend3 won, Drawe between Friend1 and Friend2');
    }
}
// Friend 2 is winning check versus Friend3
else {
    if (gameResultsFriend2 > gameResultsFriend3) {
        console.log('Friend2 won.');
    } else if (gameResultsFriend2 == gameResultsFriend3) {
        console.log('Friend1 lost, Draw between Friend2 and Friend3');
    } else {
        console.log('Friend3 won.');
    }
}

//SOLUTION TUTOR - doesn't show between who and who draw is
if (gameResultsFriend1 > gameResultsFriend2  && gameResultsFriend1 > gameResultsFriend3) {
    console.log('Friend1 wins');
} else if (gameResultsFriend2 > gameResultsFriend1 && gameResultsFriend2 > gameResultsFriend3) {
    console.log('Friend2 wins');
} else if (gameResultsFriend3 > gameResultsFriend1 && gameResultsFriend3 > gameResultsFriend2) {
    console.log('Friend3 wins');
} else {
    console.log('Draw between players')
}