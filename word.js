
var Letter = require("./Letter");

// var testletter = "o";
// var selectedWord = "yoga";

//returns a string representing te word.  This should call the function on each letter object (func1) that displays the character or an underscore and concatenate those together.//
function Word(testletter, selectedWord) {
	this.guess = testletter;
	this.unknownWord = [];
	this.func3 = function(guess){
		for (var i=0; i<selectedWord.length; i++){
			correctLetter = selectedWord.charAt(i);
			var output = new Letter(testletter);
			this.unknownWord.push(output.unknownLetter);
			console.log("From Word Constructor");
			console.log(this.unknownWord);
		};
		console.log("____________________");
		console.log(this.unknownWord.join(""));
	};

	//takes a character as an argument and calls the guess func2 on each letter object//
	// this.func4 = function(guess){
	// 	Letter().func2(guess);

	// };
	

//takes a character as an argument and calls the guess func2 on each letter object//
this.func3();
// this.func4();
};

 // var output = new Word(testletter);

module.exports = Word;