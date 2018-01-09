// letter constructor

var Letter = function(letter, status){
		//console.log(letter);
		//console.log(status);
	this.letter = letter;
	this.status = status;
	this.print = function(){
		if (this.status === "guessed"){
			return letter;
		}
		else if (this.status === "notguessed"){
			if (letter === " "){
			 	return "   "
			}
			else {
				return " - "
			}
		};
	};

};
//export out Letter constructor
module.exports = Letter;