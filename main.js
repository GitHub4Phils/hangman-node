
// requiring Word module exported from Word.js
var Word = require("./Word.js");
var showList=["Turn","Better Call Saul","Iron Fist","House of Cards","Stranger Things","Anne with and E","OZARK","Frontier", "The Crown","The Paradise","The Walking Dead", "Jericho", "Marco Polo"];
var moviePick=showList[(Math.floor(Math.random()*showList.length))];
console.log("=========================================================");
console.log("HangMan - We have a great list of shows for you to guess!");
console.log("===============  Guess This One =========================");
//console.log(" Show you are guessing: "+moviePick);
var newWord = new Word(moviePick);

newWord.play(moviePick);
