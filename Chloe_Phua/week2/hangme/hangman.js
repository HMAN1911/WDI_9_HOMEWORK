//counter

var movePixels = (document.getElementsByClassName('impendingdeath')[0].offsetWidth)/8;
var goRight = true;
var slimePosition;
var img = document.getElementsByTagName('img')[0];
var randword;
var newBtn = document.getElementsByTagName('button')[0];
var letterGuess;
var board = document.getElementById('game');
var allLetters = document.getElementsByTagName('span');

function slimeMove() {
  slimePosition = parseInt(img.style.left);
  img.style.left = (slimePosition + movePixels) + 'px';
}

/*RANDOM WORD TIME*/
var words = ['burger','fries','wings','deep fried wings','pizza','beer'];
/*select random word*/
function chooseWord() {
  randWord = words[Math.floor(words.length * Math.random())];
  /*create span for each letter in word*/
  for (var i = 0; i < randWord.length; i++) {
    var newLetter = document.createElement('span');
    newLetter.innerHTML = randWord[i];
    board.appendChild(newLetter);
  }
}

/*this should change on a button or page refresh*/

if (window.performance) {
  if (performance.navigation.type == 1) {
    chooseWord();
  }
}

/*does keystroke match character in the randWord*/
function getKey(event) {
  letterGuess = String.fromCharCode(event.keyCode);
  console.log("getkey fired");
  checkKey();
}


/*if check key is true, display the key*/
function checkKey() {
  console.log("check key fired")
  var letterFilter = 0;
  for (var i = 0; i < randWord.length; i++) {
    for (var j = 0; j < allLetters.length; j++) {
      console.log("got random word length");
      if (letterGuess === randWord[i] && allLetters[j].innerHTML === randWord[i]) {
          allLetters[j].style.visibility = "visible";
          console.log("letter pressed = letter on board");
          letterFilter += 1;
          }
      }
    }
    if (letterFilter === 0) {
      slimeMove();
    }
  }

//go through each letter, when letter is correct, + 1 to a counter
//if counter = 0, then move the slime
//letter filter is at the start because reset every time key is pressed

/*add event listener for keydown*/
newBtn.addEventListener("click", chooseWord);
document.addEventListener("keypress",getKey);
