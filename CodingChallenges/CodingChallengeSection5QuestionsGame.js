/////////////////////////////
// CODING CHALLENGE

var questions = [];
var answers = [];
var correctAnswers = [];

function Question(question, answer, correctAnswer) {
	questions.push(question);
	answers.push(answer);
	correctAnswers.push(correctAnswer);
};

Question('Do you like apples?', ['0) Yes', '1) No'], 0);
Question('Do you like lemon?', ['0) Yes', '1) No'], 1);
Question('Do you like oranges?', ['0) Yes', '1) No'], 0);

function ListQuestions(question) {
	console.log(questions[question]);
	console.log(answers[question]);
};

var questionToAsk = Math.floor(Math.random()*3);
console.log(questionToAsk);

ListQuestions(questionToAsk);

var userAnswer = Number(prompt('Specify correct answer:'));

console.log('Provided answer: ' + userAnswer);
console.log('Correct answer: ' + correctAnswers[questionToAsk]);

function ValidateAnswer(providedAnswer, question) {
	if (providedAnswer === correctAnswers[question]) {
		console.log('Answer is correct!');
	} else {
		console.log('Answer is not correct. Correct answer is: ' + answers[question][correctAnswers[question]]);
	}
};

ValidateAnswer(userAnswer,questionToAsk);

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
