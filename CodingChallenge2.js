/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called
printFullAge which receives the array of years as an argument,
executes the steps 2., 3. and 4.
and returns an array of true/false boolean values: true if the person
is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/
/**
 * Created by Krzysztof Bury on 02/04/2017.
 */

var currentYear = 2017;

// FIRST PART OF TASK
var personBornAtYear = [1965, 2008, 1992];
var personAge = [];

for (var i=0; i < personBornAtYear.length; i++) {
    personAge[i] = currentYear - personBornAtYear[i];
    if (personAge[i] >= 18) {
        console.log('Person: '+(i+1)+' is of full age');
    }
}

// SECOND PART OF TASK
function printFullAge (arrayWithAges) {
    var personAgeForLoop = [];
    for (var j=0; j < arrayWithAges.length; j++) {
        if ((currentYear - arrayWithAges[j]) >= 18) {
            personAgeForLoop.push(true);
        } else {
            personAgeForLoop.push(false);
        }
    }
    return personAgeForLoop;
}

var arrayForChallenge1 = [1965, 2008, 1992];
var arrayForChallenge2 = [1967, 2009, 1993];

var full_1 = printFullAge(arrayForChallenge1);
console.log(full_1);
var full_2 = printFullAge(arrayForChallenge2);
console.log(full_2);