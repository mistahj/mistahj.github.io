// Your JS code goes here.
$(document).ready(function(){


var	question = prompt('Rock, Paper, or Scissors?');
	userInput = question.toLowerCase();

var compInput = Math.floor((Math.random() * 15)+1);
	
	console.log(compInput);

if((userInput !== "rock") && (userInput !== "paper") && (userInput !== "scissors")){
		alert("Please enter rock, paper, or scissors...");
}else if((compInput > 0) && (compInput <= 5)){
	 compInput = "rock";
	 console.log(compInput);
}else if((compInput >= 6) && (compInput <= 10)){
	compInput = "paper";
	 console.log(compInput);
}else if((compInput >= 11) && (compInput <= 15)){
	 compInput = "scissors";
	 console.log(compInput);
}

if(compInput === userInput){
	alert("Computer threw" + " " + compInput + "." + " It's a tie!");
}else if(userInput === "rock") {
	if(compInput === "scissors"){
		alert("Computer threw" + " " + compInput + "." + " rock beats scissors, you win!");
	}else if(compInput === "paper"){
		alert("Computer threw" + " " + compInput + "." + " paper beats rock, you lose.");
	}
}else if(userInput === "paper"){
	if(compInput === "rock"){
		alert("Computer threw" + " " + compInput + "." + " paper beats rock, you win!");
	}else if(compInput === "scissors"){
		alert("Computer threw" + " " + compInput + "." + " scissors beat paper, you lose");
	}
}else if(userInput === "scissors"){
	if(compInput === "paper"){
		alert("Computer threw" + " " + compInput + "." + " scissors beat paper, you win!");
	}else if(compInput === "rock"){
		alert("Computer threw" + " " + compInput + "." + " rock beats scissors, you lose.");
	}
}


})