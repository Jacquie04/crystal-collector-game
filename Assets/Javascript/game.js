
// var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; for (var i = 0; i < numberOptions.length; i++) {

// switch out with loop
// var numberGenerated = (19)['..'](120);

var wins = 0;
var losses = 0;
var score = 0;
var randomNumber=0;


//var winsText = document.getElementById('wins-text');
//var lossesText =document.getElementById('losses-text');
//var randomNumberText =document.getElementById('randomNumber-text');
//var scoreText =document.getElementById('score-text');

$('#wins-text').text(wins);
$('#randomNumber-text').text(randomNumber);
$('#losses-text').text(losses);
$('#score-text').text(score);


function crystalNumbers () {



var imageCrystalBlue = $("<img>");
var imageCrystalGreen = $("<img>");
var imageCrystalPink = $("<img>");
var imageCrystalPurple = $("<img>");

console.log (imageCrystalBlue)

imageCrystalBlue.addClass("crystal-image-blue");
imageCrystalGreen.addClass("crystal-image-green");
imageCrystalPink.addClass("crystal-image-pink"); 
imageCrystalPurple.addClass("crystal-image-purple");

imageCrystalBlue.attr('src','./Assets/Images/blue crystal.jpg');

imageCrystalGreen.attr('src', './Assets/Images/green crystal.jpg');

imageCrystalPink.attr('src', './Assets/Images/pink crystal.jpg');

imageCrystalPurple.attr('src', './Assets/Images/Purple crystal.jpg');


imageCrystalBlue.attr("data-crystalvalue-blue", Math.floor(Math.random() * 12)+1);
imageCrystalGreen.attr("data-crystalvalue-green", Math.floor(Math.random() * 12)+1);
imageCrystalPink.attr("data-crystalvalue-pink", Math.floor(Math.random() * 12)+1);
imageCrystalPurple.attr("data-crystalvalue-purple", Math.floor(Math.random() * 12)+1);

$('#crystalBlue').append(imageCrystalBlue);
$('#crystalGreen').append(imageCrystalGreen);
$('#crystalPink').append(imageCrystalPink);
$('#crystalPurple').append(imageCrystalPurple);



$(".crystal-image-blue").on("click", function() {

    var crystalValueBlue = ($(this).attr("data-crystalvalue-blue"));
    crystalValueBlue = parseInt(crystalValueBlue);
    score += crystalValueBlue;

    $('#score-text').text(score);
    

});

$(".crystal-image-green").on("click", function() {

    var crystalValueGreen = ($(this).attr("data-crystalvalue-green"));
    crystalValueGreen = parseInt(crystalValueGreen);
    score += crystalValueGreen;

    $('#score-text').text(score);


});

$(".crystal-image-pink").on("click", function() {

    var crystalValuePink = ($(this).attr("data-crystalvalue-pink"));
    crystalValuePink = parseInt(crystalValuePink);
    score += crystalValuePink;
 
    $('#score-text').text(score);

});

$(".crystal-image-purple").on("click", function() {

    var crystalValuePurple = ($(this).attr("data-crystalvalue-purple"));
    crystalValuePurple = parseInt(crystalValuePurple);
    score += crystalValuePurple;

    $('#score-text').text(score);

});
}

function startGame() {
   
    randomNumber = Math.floor(Math.random() * 101)+19;
    
    $('#randomNumber-text').text(randomNumber)
    console.log(randomNumber);
   losses = [];
   wins = [];
    
if (score === randomNumber) {
    wins++;
    alert("You Win!");
    $('#wins-text').text(wins);
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  }

  else if (score >= randomNumber) {
    losses++;
    alert("Better Luck Next Time");
    $('#losses-text').text(losses);
    document.getElementById("loss-counter").innerHTML = lossCounter;
    startGame();
  }
}
  startGame();
  crystalNumbers ();

