var random = Math.floor((Math.random() * 6) + 1); //PLAYER 1         //getting numbers ranging from 1 to 6 instead of 0 to 0.999...
var diceImg = "images/dice" + random + ".png";                      //getting the new image path by using concatenation

document.querySelectorAll("img")[0].setAttribute("src", diceImg);   //select the first imd(dice) and change its src attribute to the new image path - attribute manipulation

var random2 = Math.floor((Math.random() * 6) + 1);//PLAYER 2
var diceImg2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceImg2); 

if(random > random2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(random2 > random){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw!";
}