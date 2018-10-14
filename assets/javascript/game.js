$(document).ready(function() {
var goalValue = 0;
var counter = 0;
var wins = 0;
var losses = 0;

function generateGoalValue() {
    goalValue = (Math.floor((Math.random() * 101) + 19));
    $("#goalValue").text("Your goal value is: " + goalValue)
};
generateGoalValue();
console.log(goalValue);

var gemArray = [];

function generateGemValues() {
    for (var i = 1; i < 5; i++) {
    gemArray.push(Math.floor(Math.random() * 12) + 1);
    }
};
generateGemValues();
console.log(gemArray);


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
        document.getElementById("#chaching").play();
        play();
        gemArray = [];
        generateGemValues();
        generateGoalValue();
        counter = 0;
    } else if (counter > goalValue) {
      losses++;
      $(".losses").text("Losses: " + losses);
      gemArray = [];
      generateGemValues();
      generateGoalValue();
      counter = 0;
    };

  });

})