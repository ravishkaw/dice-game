var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageOneName = `dice${randomNumber1}.png`;
var imageOneSource = `./images/${randomImageOneName}`;
var imageOne = document.querySelectorAll("img")[0];
imageOne.setAttribute("src", imageOneSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageTwoName = `dice${randomNumber2}.png`;
var imageTwoSource = `./images/${randomImageTwoName}`;
var imageTwo = document.querySelectorAll("img")[1];
imageTwo.setAttribute("src", imageTwoSource);

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 wins";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerText = "Draw";
} else {
  document.querySelector("h1").innerText = "Player 1 wins";
}
