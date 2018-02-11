


function Letter(string, guessed, func1, func2) {
	this.string = string;
	this.guessed = guessed;
	this.func1 = function(){

//returns underlying character if the letter has been guessed or underscore if it has not been guessed//
	};
	this.func2 = function(){

//takes a character as an argument and checks it against the underlying character, updateing tghe stored boolean value to true if guessed correclty//
	};



};



module.exports = Letter;
	// this.printStats = function() {
	// 	console.log(this.name, this.profession, this.gender, this.age, this.strength, this.hitpoints);
	// 
// 	this.printStats = function() {
// 		for (var key in this)
// 		{
// 			if (typeof this[key] === "string" || typeof this[key] === "number")
// 				console.log(key+":", this[key]);
// 		}
// 		console.log("\n-------------\n");
// 	};
// };

// 	var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

// 	bob.printStats();

