//counter

var movePixels = 10;
var goRight = true;
var slimePosition;
var img = document.getElementsByTagName('img')[1];
var counter = 0;
var randword;
var newBtn = document.getElementsByTagName('button')[0];
var letterGuess;

function slimeMove() {
  if (counter > 0) {
    slimePosition = parseInt(img.style.left);
    img.style.left = (slimePosition + movePixels) + 'px';
  }
}

/*RANDOM WORD TIME*/

var words = ['burger','fries','wings','deep fried wings','pizza','beer'];
/*select random word*/
function chooseWord() {
  randWord = words[Math.floor(words.length * Math.random())];
  console.log(randWord);
}
/*this should change on a button or page refresh*/
newBtn.addEventListener("click", chooseWord);

if (window.performance) {
  if (performance.navigation.type == 1) {
    chooseWord();
  }
}

/*does keystroke match character in the randWord*/
function getKey(event) {
  return letterGuess = event.keyCode;
}

/*if check key is true, display the key*/
for (var i = 0; i < randWord.length; i++) {
  if (randWord[i] === letterGuess) {
    console.log("cool")
  }
}
//
// for randWord

/*add event listener for keydown*/

document.addEventListener("keypress",getKey)
