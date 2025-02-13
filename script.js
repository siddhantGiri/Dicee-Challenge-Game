//Generating a random number between 1 and 6
var randomNumber1   = Math.floor(Math.random() * 6) + 1;
var randomNumber2   = Math.floor(Math.random() * 6) + 1;

//Generating a random dice image between dice1.png and dice6.png
var randomDiceImage1 = "Images/dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomDiceImage2 = "Images/dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

//Selecting the first image and changing the src attribute
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomDiceImage1);

//Selecting the second image and changing the src attribute
var Image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//Changing the h1 text based on the random number
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"; 
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"; 
}
else{
    document.querySelector("h1").innerHTML = "Draw! Try again";
}
