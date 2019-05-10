
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
        } else if (yourScore > target) {
            losses++;
            $('#losses').text(losses);
            startGame();
        }
    })

}

$(document).ready(function () {
    startGame();
});
