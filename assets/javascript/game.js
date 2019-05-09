// Global Variables wins, loses, target score, your score
var randomNum = generateRandom();
// var crystals = document.getElementsByClassName(".crystals")
var garnetImg = document.getElementById("#garnet")
var amethystImg = document.getElementById("#amethyst")
var pearlImg = document.getElementById("#pearl")
var stevenImg = document.getElementById("#steven")

//array of crystal opject (to loop through)
var crystalArray = []

//dynamically create crystals on the page (one object per crystal)
    //each crystal needs a score, an image, [aka a string holding the path to the image - which is saved in a folder in your project] an object with all of this info (aka collection of key value parts)
var garnet = {
    Score: "0",
}
console.log (garnet)

// Random number Function: 
function generateRandom(){}
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