
// var testletter = "k";
// var correctLetter = "k";


function Letter(guess) {
	this.unknownLetter = " _ ",
	this.guess = guess;
	this.present = false;
	console.log("Guess: " + guess);
	console.log("Correct Letter: " + correctLetter);
	// takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if guessed correclty//
	this.func2 = function(){
		this.present = true;
	};
	//returns underlying character if the letter has been guessed or underscore if it has not been guessed//
	this.func1 = function(guess){
			if(this.guess === correctLetter) {
				this.unknownLetter = this.guess;
				this.func2();
			}; 
			console.log("Unknown Letter: " + this.unknownLetter);
			console.log("Present: " + this.present);
	};

	this.func1();
};



  // var output = new Letter(testletter);
  // console.log("____________________");
  // console.log(output);
  // console.log(output.unknownLetter);


module.exports = Letter;

