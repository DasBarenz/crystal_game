$(document).ready(function() {
//computer GENERATES random number for user goal number, between 19-120
//the goal number is DISPLAYED on the screen
var goalValue = Math.floor((Math.random() * 101) + 19);
    console.log(goalValue);
    $("#goalValue").text("Your goal value is: " + goalValue)

//computer GENERATES random numbers for each gem, between 1-12

// var i = 1;
var gemArray = [];

function generateGemValues() {
    for (var i = 1; i < 5; i++); {
    // var randomNumber = Math.floor(Math.random() * 12) + 1;
        gemArray.push(Math.floor(Math.random() * 12) + 1);
    // gemArray.push(randomNumber);
    } // THIS ONLY POPULATES FIRST NUMBER IN ARRAY
};

generateGemValues();
console.log(gemArray);

//assign value to the images, this seems clunky --THIS ALSO DOESN'T LIKELY WORK
$("#emerald").attr(gemArray[0]);
$("#tourmaline").attr(gemArray[1]);
$("#ruby").attr(gemArray[2]);
$("#citrine").attr(gemArray[3]);

})

//reset from calculator game to reset during the operations by pressing a button "clear"
    //$(".clear").on("click", function() {
        //resetCalculator();
    //     })

//reset from calculator game to start the game fresh
    //resetCalculator();
//  generateGemValues ((Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1));