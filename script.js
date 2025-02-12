var randomNumber1   = Math.floor(Math.random() * 6) + 1;

var randomNumber2   = Math.floor(Math.random() * 6) + 1;


var randomDiceImage1 = "Images/dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomDiceImage2 = "Images/dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomDiceImage1);


var Image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
