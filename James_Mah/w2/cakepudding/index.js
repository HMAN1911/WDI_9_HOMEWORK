var wordList = ["charmander", 
                "bulbasaur", 
                "squirtle", 
                "pikachu"];
var word = [];
var guessed = [];
var charPressed = [];
var turnsLeft = 5;
var won = false;

generateWord();

function generateWord() {
  word = wordList[Math.floor(Math.random() * wordList.length )].toUpperCase().split("");
  printWord();
}

function printWord() {
  for (var i = 0; i < word.length; i++) {
    var letter = document.createElement("div");
    letter.innerHTML = "_";
    document.getElementById('word').appendChild(letter);
  }
} 

var body = document.querySelector('body');

// On key press, perform this function
body.onkeydown = function (e) {
  if ( !e.metaKey ) {
    e.preventDefault();
  }
  setTimeout(function() {
    var char = String.fromCharCode(e.keyCode);
    if (!won && turnsLeft > 0 && checkCharIsAlphabet(char) && charNotPressed(char)) {
      checkCharInWord(char);
      checkWin();
    }
  }, 200);
};

// check if input character is in the word and update the 'guessed' array
function checkCharInWord(char) {
  var charInWord = false;
  for (var i = 0; i < word.length; i++) {
    if (char === word[i]) {
      guessed[i] = 1;
      document.getElementById('word').getElementsByTagName('div')[i].innerHTML = word[i];
      charInWord = true;
    }
  }
  if (!charInWord) {
    turnsLeft--;
    var noOfX = "";
    for (var i = 0; i < turnsLeft; i++) {
      noOfX += "X";
    }
    document.getElementById('turnsleft').getElementsByTagName('span')[0].innerHTML = noOfX;
    if (turnsLeft === 0) {
      lose();
    }
  }
}

// check if the guessed array is complete and returns true when it is, false when it is not
function checkWin() {
  for (var i = 0; i < word.length; i++) {
    if (guessed[i] === undefined) {
      return false;
    }
  }
  win();
  return won = true;
}

//do this when the player wins
function win() {
  var output = document.createElement("div");
  output.innerHTML = "You won!!!";
  document.getElementById('win').appendChild(output);
  console.log("hooray you won!");
}

function lose() {
  var output = document.createElement("div");
  output.innerHTML = "You lost...";
  document.getElementById('win').appendChild(output);
  console.log("hooray you lost!");
}

// increment keystroke count when an alphabet is pressed
function checkCharIsAlphabet(char) {
  if (char.match(/[A-Z]/g) !== null) {
    return true;
  }
  return false;
}

// check if the key is pressed before and return true is it was not
function charNotPressed(char) {
  for (var i = 0; i <= charPressed.length; i++){
    if (charPressed[i] === char) {
      return false;
    }
  }
  charPressed.push(char);
  var letter = document.createElement("div");
  letter.innerHTML = char;
  document.getElementById('lettersguessed').appendChild(letter);
  return true;
}
