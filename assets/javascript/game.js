$(document).ready(function() {
    
// Global Variables wins, loses, target score, your score
var wins = 0;
var losses = 0;
var target = Math.floor((Math.random() * 120) + 19);
var score = 0;

$('#wins').text(wins);
$('#losses').text(losses);
$('#target').text(target);
$('#score').text(score);


//dynamically create crystals on the page (one object per crystal)
//each crystal needs a score, an image, [aka a string holding the path to the image - which is saved in a folder in your project] an object with all of this info (aka collection of key value parts)
var garnet = {
    score: Math.floor((Math.random() * 12) + 1), //set to run or pull the randomNum function
}
console.log (garnet)

var amethyst = {
    score: Math.floor((Math.random() * 12) + 1),
}
console.log (amethyst)

var pearl = {
    score: Math.floor((Math.random() * 12) + 1),
}
console.log (pearl)

var steven = {
    score: Math.floor((Math.random() * 12) + 1),
}
console.log (steven)

$('#garnet').text(garnet);
$('#amethyst').text(amethyst);
$('#pearl').text(pearl);
$('#steven').text(steven);

// Random number Function: 
// function generateRandom(){
//     randomNum = Math.floor((Math.random() * 12) + 1)
//     console.log (randomNum)
// }

// function crystalScore(){
//     for(var i = 0; i < crystalArray.length; i++) {
//         crystalArray[i].score = text.generateRandom(0);
//     }
//     }


});


//something with math...
    //return a random number

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