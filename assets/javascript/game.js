
// Global Variables wins, loses, target score, your score
var wins = 0;
var losses = 0;

function startGame() {
    var target = randomNum(19, 120);
    var score = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#target').text(target);
    $('#score').text(score);
    $("#crystal").text("");

    //dynamically create crystals on the page (one object per crystal)
    //each crystal needs a score, an image, [aka a string holding the path to the image - which is saved in a folder in your project] an object with all of this info (aka collection of key value parts)

    var crystalArray = ["assets/images/garnet.png", "assets/images/amethyst.png", "assets/images/pearl.png", "assets/images/steven.png"]

    function createCrystals() {
        for (var i = 0; i < crystalArray.length; i++) {
            var crystal = $("<img>");
            crystal.attr("src", crystalArray[i]);
            crystal.addClass("gems");
            crystal.attr("data-value", randomNum(1, 12));
            $("#crystal").append(crystal);
        }
    }

    createCrystals()


    // Random number Function: 
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('.gems').on("click", function () {
        var gemScore = parseInt($(this).attr("data-value"));
        var yourScore = score += gemScore;
        $('#score').text(yourScore);
        if (yourScore === target) {
            wins++;
            $('#wins').text(wins);
            startGame();
            console.log("You win! 🤩")
        } else if (yourScore > target) {
            losses++;
            $('#losses').text(losses);
            startGame();
            console.log("YOU SUCK 🤬")
        }
    })

}

$(document).ready(function () {
    startGame();
});
    //Click event function
    //each crystal should have the same class so that you dont need 4 seperate click events
    //var score = yourScore + crystalValue;


// start/reset game
//     clear out variables (especially your score)
//     set target score
//     assign a value for each crystals
//     .empty will be helpful
//     If your score is grater than target score, then
//     If yourScore is less than, then