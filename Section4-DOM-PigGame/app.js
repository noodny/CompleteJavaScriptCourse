/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('#current-' + activePlayer).textContent = dice;

/* Testing
Examples of GETter
var x = document.querySelector('#score=0').textContent; 

console.log(x);

Hidding the dice at the beginning
document.querySelector('.dice').style.display = 'none';
*/

document.querySelector('.btn-roll').addEventListener('click', function() {
	
	// 1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;

	//2. Display the result
	

	//3. Update the round score IF the rolled number was NOT a 1
	
	
});


// Callback function - when a function even is triggering another function
// to execute 

// Anonymous Function example
/*document.querySelector('.btn-roll').addEventListener('click', function() {
	// Function used insinde of a callback that doesn't have a name is called 
	// Anonymous function
});*/

