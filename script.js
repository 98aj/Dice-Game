let randomNumber1 = Math.floor(Math.random()*6+1);
let randomNumber2 = Math.floor(Math.random()*6+1);
let changeImage1 = document.querySelector("img.img1");
let changeImage2 = document.querySelector("img.img2");


// Roll Dice

changeImage1.setAttribute("src", "/images/dice"+randomNumber1+".png");
changeImage2.setAttribute("src", "/images/dice"+randomNumber2+".png");


// To select the winner
let winner = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    winner.innerText = "Player1 Win";
} else if (randomNumber1 < randomNumber2) {
    winner.innerText = "Player2 Win";
}
else{
    winner.innerText = "Draw!"
}