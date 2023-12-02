const imageSelector = (randomNumber, image) => {
  var randomImage = `dice${randomNumber}.png`;
  var imageSource = `./images/${randomImage}`;
  image.setAttribute("src", imageSource);
};

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageOne = document.querySelectorAll("img")[0];
imageSelector(randomNumber1, imageOne);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageTwo = document.querySelectorAll("img")[1];
imageSelector(randomNumber2, imageTwo);

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 wins";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerText = "Draw";
} else {
  document.querySelector("h1").innerText = "Player 1 wins";
}
