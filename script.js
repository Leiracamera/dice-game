let diceOneImage = document.querySelector(".img1");
let diceTwoImage = document.querySelector(".img2");

let displayWinner = document.querySelector("h1");


let imageArray = ["./images/dice1.png", 
"./images/dice2.png", 
"./images/dice3.png", 
"./images/dice4.png",
"./images/dice5.png",
"./images/dice6.png"];


function getRandomImage() {
    let randomIndex = Math.floor(Math.random() * imageArray.length);
    return {
        index: randomIndex,
        image: imageArray[randomIndex]
    }
}


let player1 = getRandomImage();
diceOneImage.setAttribute("src", player1.image);

let player2 = getRandomImage();
diceTwoImage.setAttribute("src", player2.image);

if (player1.index > player2.index) {
    displayWinner.textContent = "🚩 Player 1 Wins!"
} else if (player2.index > player1.index) {
    displayWinner.textContent = "Player 2 Wins! 🚩"
} else {
    displayWinner.textContent = "It's a Tie"
}

