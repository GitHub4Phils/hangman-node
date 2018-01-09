//require inquirer for prompting the user to enter the letter
var inquirer = require('inquirer');
// require letter module from letter.js

var Letter = require("./letter.js");

//constructor function for what to do with the show that's been passed
var Word = function(show){
	var showLength = show.length;
	//var guessCtr = showLength + (showLength%2); // we allow the user to guess 5 more times plus the length of the show
	var displayshow = [];
	var userGuesses="";
	var guessCtr = 10;
	
	//console.log (guessCtr);
	
function keepAsking(show){
		if (guessCtr > 0) {
			var solved = true;
			inquirer.prompt([{
			name: "letter",
			message: "Guess a letter: ",
			type: "input"
			}
			]).then(function(answer) {
				//console.log(guessCtr);
				// add this letter to userGuesses
				//if guessed
				// console log correct
				if (show.indexOf(answer.letter) > -1){
					console.log("CORRECT!!!")
				} else {
					console.log(guessCtr+" guesses remaining...");
					guessCtr=guessCtr-1;
				}

				displayshow = [];
				//console.log(answer.letter);
				userGuesses+=answer.letter.toLowerCase();
				console.log("So far you have guessed: "+userGuesses);
				//console.log(show);
				//loop thru the word
				for (var i=0; i < show.length; i++){
					//what to do with spaces
					if (show[i] === " ") { //what to do if its a space
						//console.log("this letter is ___:"+show[i]);
						displayshow += "   ";
						//letter.print();
					}
					else{//what to do if its a letter
						//loop thru userGuesses
						if (userGuesses.indexOf(show[i].toLowerCase()) > -1) {
							var letter = new Letter(show[i],"guessed");
							displayshow += letter.print();
						} else {
							var letter = new Letter(show[i],"notguessed");
							displayshow += letter.print();
							solved = false;
							//console.log(solved)
						}

						// for (var j=0;j < userGuesses.length; j++){
						// 	if (userGuesses[j] === show[i])
						// 	{
						// 		console.log("this letter is guessed:"+show[i]);
						// 		var letter = new Letter(show[i],"guessed");
						// 		displayshow += letter.print();
						// 		//displayshow += userGuesses[j];
						// 		letter.print();
						// 	} 
						// 	else 
						// 	{
						// 		console.log("this letter is notgussed:"+show[i]);
						// 		var letter = new Letter(show[i],"notguessed");
						// 		displayshow += letter.print();
						// 		//displayshow += " - "
						// 		letter.print();

						// 	}
						// }
						
					}
				}

				console.log(displayshow);
				if (solved){ 
					console.log("YOU'VE SOLVED IT!");
					console.log("=========================================================");
					}
				else{
					//what to do next? keep looping thru asking the user for a letter
				keepAsking(show);
				}

				
		});
			}
			else {
				// if we run out of guesses
				console.log("Sorry! You run out of guesses!");
				console.log("The show you are guessing is: "+ show);
			}
}
	
	// 
	//this.show = show;
	this.play = function(show){
		
		//loop thru the show to guess for the first time we're showing this show
		for (var i=0; i < show.length; i++){
			//what to do with spaces
			if (show[i] === " ") {
				displayshow += "   ";
			}
			else{
			var letter = new Letter(show[i],"notguessed");
			displayshow += letter.print();
			}
		}
		console.log(displayshow);
		//promp the user for a letter to guess
		keepAsking(show);
	};

};

module.exports = Word;