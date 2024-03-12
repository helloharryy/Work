function player1 () {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNumber1);
    let randomDiceImages = "dice" + randomNumber1 + ".png";
    // console.log(randomDiceImages);
    
    let randomImageSource = "images/" + randomDiceImages;
    // console.log(diceRoll);
    
    let image1 = document.querySelectorAll("img")[0];
    
    image1.setAttribute("src", randomImageSource);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImages2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomDiceImages2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆Player 2 Wins";
} else {
    (document.querySelector("h1")).innerHTML = "Draw";
}
    
}

document.querySelector("button").addEventListener("click", player1);
