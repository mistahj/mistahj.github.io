// Your JS code goes here.
$(document).ready(function(){


    $(".button").one('click', function () {
        var userInput = $("#move").val();
        var compInput = Math.floor((Math.random() * 15) + 1);

        if ((userInput !== "scissors") && (userInput !== "rock") && (userInput !== "paper")) {
            $('.words').append("<p>please enter rock, paper, or scissors</p>");
        }

        if ((compInput > 0) && (compInput <= 5)) {
            compInput = "rock";
            console.log(compInput);
        } else if ((compInput >= 6) && (compInput <= 10)) {
            compInput = "paper";
            console.log(compInput);
        } else if ((compInput >= 11) && (compInput <= 15)) {
            compInput = "scissors";
            console.log(compInput);
        }

        if (compInput === userInput) {
            $('.words').append('<p>Computer threw' + " " + compInput + "." + " It's a tie!</p>");
        } else if (userInput === "rock") {
            if (compInput === "scissors") {
                $('.words').append("<p>Computer threw" + " " + compInput + "." + " rock beats scissors, you win!</p>");
            } else if (compInput === "paper") {
                $('.words').append("<p>Computer threw" + " " + compInput + "." + " paper beats rock, you lose.</p>");
            }
        } else if (userInput === "paper") {
            if (compInput === "rock") {
                $('.words').append("<p>Computer threw" + " " + compInput + "." + " paper beats rock, you win!</p>");
            } else if (compInput === "scissors") {
                $('.words').append("<p>Computer threw" + " " + compInput + "." + " scissors beat paper, you lose.</p>");
            }
        } else if (userInput === "scissors") {
            if (compInput === "paper") {
                $('.words').append("<p>Computer threw" + " " + compInput + "." + " scissors beat paper, you win!</p>");
            } else if (compInput === "rock") {
                $('.words').append("<p>Computer threw" + " " + compInput + "." + " rock beats scissors, you lose.</p>");
            }
        }


            $(".button").hide();
            $("#reset").show();
});
});
