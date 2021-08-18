function roll_dice(){

var random_Num1=(Math.floor(Math.random()*6)+1);
var random_Num2=(Math.floor(Math.random()*6)+1);

var link_1="./images/dice"+random_Num1+".png";
var link_2="./images/dice"+random_Num2+".png";

document.querySelectorAll("img")[0].setAttribute("src",link_1);
document.querySelectorAll("img")[1].setAttribute("src",link_2);

if(random_Num1>random_Num2)
document.querySelector("h1").innerHTML="Player 1 wins!";
else if(random_Num1<random_Num2)
document.querySelector("h1").innerHTML="Player 2 wins!";
else
document.querySelector("h1").innerHTML="Draw!";
}
