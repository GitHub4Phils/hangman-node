// The completed game should meet the following criteria:
// The completed game should be able to receive user input using the inquirer or prompt npm packages.
// Feel free to use as many different types of constructor 
// functions as you are able to, but at a minimum, you must create the following constructor functions:

// Word: Used to create an object representing the current word the user is attempting to guess. 
// This should contain word specific logic and data.

var wordList=["The Walking Dead","The Crown","Sherlock","The Punisher","House of Cards","Frontier","Better Call Saul","Stranger Things",]
var letterGuessed = [];
var wordGuessing =[];
var wordGuessingDash="";
var wordGuessingDashShow="";
var guessCtr=0;

// pick a random word to guess
var getGuessingIndex = Math.floor((Math.random() * wordList.length) + 1);
var wordGuessing=wordList[getGuessingIndex];

console.log(getGuessingIndex);
console.log("You will be guessing: "+wordGuessing);
console.log(wordGuessing.length);


// lets replace the word guessing with dashes

for (i=0; i < wordGuessing.length;i++)
{
	if (wordGuessing[i]===" "){
		wordGuessingDash+=(" ")
		wordGuessingDashShow+=("  ");

	} else{

		wordGuessingDash+=("-")
		wordGuessingDashShow+=(" - ");
		}
}

console.log(wordGuessingDash);
console.log(wordGuessingDashShow);
console.log(wordGuessingDash.length);
console.log(wordGuessingDashShow.length);
console.log(wordGuessingDash[3]);

//use inquirer for user guesses

// dependency for inquirer npm package
var inquirer = require("inquirer");
//start asking for letter guessed
 console.log("Guess this Popular TV Show:\n");
//function that will loop thru the guesses allowed which is 10

  //we have to loop this until guesses are 10
  if (guessCtr < 10) {

    			inquirer.prompt([
			      {
			        name: "letterGuessed",
			        message: "Type a letter: "
			      }
				]).then(function(answers) {
					      // 
					      console.log(answers.letterGuessed);
					      if (wordGuessing.find(answers.letterGuessed))
					      	{
					      	console.log("theres a match!");
					      	}
					      });
				guessCtr++;
    
  }
  else {
	  	console.log("Sorry, game over!");
	  	console.log("The show you were trying to guess was: "+ wordGuessing);
	  	console.log("Do you want to play again?");
  		};
 


// Letter: Used for each letter in the current word. 
// Each letter object should either display an underlying character, 
// or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. 
// This should contain letter specific logic and data.

// You must keep track of the user's remaining guesses and prompt 
// the user if they would like to end the game if none remain.

// Each constructor function should be in it's own file 
// and be exported and required wherever needed.

// Look into function prototypes and use them for a few of your constructor's methods.

// Notes
// Since this assignment is a command-line application, 
// you don't need to deploy it anywhere. 
// You will, however, be required to upload it to Github.

// Remember to include a package.json file containing your 
// project dependencies in your Github repo!

// Minimum Requirements

// Attempt to complete homework assignment as described in instructions. 
// If unable to complete certain portions, please pseudocode 
//these portions to describe what remains to be completed.