
let x = Math.floor((Math.random()*6)+1); //creates random number between 1 - 6

let y = Math.floor((Math.random()*6)+1); //creates random number between 1 - 6

let img1 = "./images/dice"+x+".png"; // ./images/dice1.png - ./images/dice6.png

let img2 = "./images/dice"+y+".png"; // ./images/dice1.png - ./images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", img1); // sets the img1 address to random dice image created

document.querySelectorAll("img")[1].setAttribute("src", img2); // sets the img2 address to random dice image created

if(x>y){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins"; // If Dice1>Dice2 sets H1 to Player1 wins
}
else if(x<y){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩"; // If Dice2>Dice1 sets H1 to Player1 wins
}
else{
    document.querySelector("h1").innerHTML="Draw!"; // If Dice1=Dice2 sets H1 to Draw!
}