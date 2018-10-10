$(document).ready(function() {
//computer GENERATES random number for user goal number, between 19-120
//the goal number is DISPLAYED on the screen
var goalValue = Math.floor((Math.random() * 101) + 19);
    console.log(goalValue);
    $("#goalValue").text("Your goal value is: " + goalValue)

//computer GENERATES random numbers for each gem, between 1-12

var gemArray = []

function generateGemValues () {
    for (i = 0; i < 5; i++)
    $(gemArray.push) = Math.floor(Math.random() * 12) + 1;
    console.log(gemArray); ///stopping work, i think this is good code but does not console log, and needs to be activated (function call)
    };

        
//reset from calculator game to reset during the operations by pressing a button "clear"
    //$(".clear").on("click", function() {
        //resetCalculator();
    //     })

//reset from calculator game to start the game fresh
    //resetCalculator();


})
