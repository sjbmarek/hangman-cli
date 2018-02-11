
// var inquirer = require("inquirer");
var Word = require("./Word");
var targetWords = ["yoga", "samadhi", "asana", "namaste", "practice", "meditation"];
console.log(targetWords);
var selectedWord = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log (selectedWord);
var unknownWord=[];


// for (var i=0; i<selectedWord.length; i++) {
// 	console.log(" _ ");
// };



for (i = 0; i < selectedWord.length;i++) {
	unknownWord.push("_ ");
	console.log(unknownWord);
}

console.log(unknownWord.join(" ")); 