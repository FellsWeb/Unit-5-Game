//Create button for wins
//Create button for loses
//Create button for values

var userScore = 0;
var winnerScore = 0;
var loserScore = 0;

$( document ).ready(function(){
  // Generate random number to guess
  var Random=Math.floor(Math.random()* 101 + 19); 
// Create random number for each button
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  $("#button1").on("click", function(){
        userScore = userScore + num1
        console.log (userScore)

        

  })
})
