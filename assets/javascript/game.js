$(document).ready(function() {
//computer GENERATES random number for user goal number, between 19-120
//the goal number is DISPLAYED on the screen

var goalValue = (Math.floor((Math.random() * 101) + 19));
    console.log(goalValue);
    $("#goalValue").text("Your goal value is: " + goalValue)

//user progress counter starts at zero
var counter = 0;
var wins = 0;
var losses = 0;

//computer GENERATES random numbers for each gem, between 1-12

var gemArray = [6, 7, 8, 9];

// function generateGemValues() {
//     for (var i = 1; i < 5; i++); {
//     // var randomNumber = Math.floor(Math.random() * 12) + 1;
//         gemArray.push(Math.floor(Math.random() * 12) + 1);
//     // gemArray.push(randomNumber);
//     } // THIS ONLY POPULATES FIRST NUMBER IN ARRAY or...now, no numbers
// };

// generateGemValues();
// console.log(gemArray);

$("#emerald").attr("data-crystalvalue", gemArray[0]);
$("#tourmaline").attr("data-crystalvalue", gemArray[1]);
$("#ruby").attr("data-crystalvalue", gemArray[2]);
$("#citrine").attr("data-crystalvalue", gemArray[3]);


$(".gems").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    console.log(crystalValue);
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $(".points").text("Value so far: " + counter);
    if (counter === goalValue) {
      wins++;
      $(".wins").text("Wins: " + wins);
    //   generateGemValues();
      counter = 0;
    } else if (counter > goalValue) {
      losses++;
      $(".losses").text("Losses: " + losses);
    //   generateGemValues();
      counter = 0;
    };

  });


})

//reset from calculator game to reset during the operations by pressing a button "clear"
    //$(".clear").on("click", function() {
        //resetCalculator();
    //     })

//reset from calculator game to start the game fresh
    //resetCalculator();
//  generateGemValues ((Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1));
