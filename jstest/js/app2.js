// Your JS code goes here.
$(document).ready(function(){

$("form").submit(function(){
   var userInput = $("#move").val();
   var compInput = Math.floor((Math.random() * 15)+1);  

    if((userInput !== "scissors") && (userInput !== "rock") && (userInput   
    !== "paper")){
      $('.words').text("please enter rock, paper, or scissors")
    };
   /* }else if (mrmid == "scissors") {
     $('.words').text("you picked scissors")
    }else if (mrmid == "paper") {
     $('.words').text("you picked paper")
    }else if (mrmid == "rock") {
     $('.words').text("you picked rock")
    };*/
  
    if((compInput > 0) && (compInput <= 5)){
	 compInput = "rock";
	 console.log(compInput);
}else if((compInput >= 6) && (compInput <= 10)){
	compInput = "paper";
	 console.log(compInput);
}else if((compInput >= 11) && (compInput <= 15)){
	 compInput = "scissors";
	 console.log(compInput);
};
  
if(compInput === userInput){
  $('.words').text("Computer threw" + " " + compInput + "." + " It's a tie!");
} else if(userInput === "rock") {
	    if(compInput === "scissors"){
	        $('.words').after("Computer threw" + " " + compInput + "." + " rock beats scissors, you win!");
      } else if(compInput === "paper"){
    $('.words').after("Computer threw" + " " + compInput + "." + " paper beats rock, you lose.");
	}
}else if(userInput === "paper"){
	if(compInput === "rock"){
		$('.words').text("Computer threw" + " " + compInput + "." + " paper beats rock, you win!");
	}else if(compInput === "scissors"){
		$('.words').text("Computer threw" + " " + compInput + "." + " scissors beat paper, you lose");
	}
}else if(userInput === "scissors"){
	if(compInput === "paper"){
		$('.words').text("Computer threw" + " " + compInput + "." + " scissors beat paper, you win!");
	}else if(compInput === "rock"){
		$('.words').text("Computer threw" + " " + compInput + "." + " rock beats scissors, you lose.");
	}
};

});



});