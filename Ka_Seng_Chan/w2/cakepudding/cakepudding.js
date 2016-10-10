console.log('its working');

var stringList = ["apple","banana","strawberry","watermelon","orange"];
var word = "apple";
var display = ["_","_","_","_","_"];
var turnsLeft = 10;
var win = false;
var lose = false;

function getIndices(string,char) {
  var indices = [];
  for (var i = 0; i < string.length; i++) {
    if (char === string[i]) {
      indices.push(i);
    }
  }
  return indices;
}

var correctChar = '';
var wrongChar = '';

function isInWord(char) {
  if (word.indexOf(char) !== -1 && correctChar.indexOf(char) === -1) {
    var indices = getIndices(word,char);
    for (var i = 0; i < indices.length; i++) {
      display[indices[i]] = char;
    }
    correctChar += char;
    return true;
  } else if (word.indexOf(char) === -1 && wrongChar.indexOf(char) === -1) {
    wrongChar += char;
    turnsLeft -= 1;
    return false;
  } else {
    console.log('char has already been tried');
  }
}

function reset() {
  display = [];
  correctChar = '';
  wrongChar = '';
  turnsLeft = 10;
  win = false;
  lose = false;
  word = stringList[Math.floor(Math.random() * stringList.length)];
  for (var i = 0; i < word.length; i++) {
    display.push("_");
  }
}

function checkWin() {
  if (display.join('') === word) {
    return true;
    console.log('You Win');
  } else {
    return false;
  }
}

function print() {
  console.log(word);
  console.log(display);
  console.log(correctChar);
  console.log(wrongChar);
}

function cakepudding(char) {
  if (turnsLeft > 0) {
    isInWord(char);
    if (checkWin()) {
      win = true;
      console.log("You win");
    }
  }
  if (turnsLeft === 0) {
    lose = true;
    console.log("You lose");
  }
}

//----------------------------

var wordDisplayBox = document.getElementById('word-display');
var guessedDisplay = document.getElementById('guessed-letters');
var turnsDisplay = document.getElementById('turns-left');
var resetBtn = document.getElementById('reset-button');

function createWordDisplay() {
  for (var i = 0; i < word.length; i++) {
    var newLetter = document.createElement('div');
    newLetter.className = 'letter';
    newLetter.textContent = '_';
    wordDisplayBox.appendChild(newLetter);
  }
}

function updateDisplay() {
  var lettersDisplay = document.getElementsByClassName('letter');
  guessedDisplay.textContent = wrongChar;
  turnsDisplay.textContent = turnsLeft;
  for (var i = 0; i < lettersDisplay.length; i++) {
    lettersDisplay[i].textContent = display[i];
  }
}

function clearWordDisplay() {
  while (wordDisplayBox.firstChild) {
    wordDisplayBox.removeChild(wordDisplayBox.firstChild);
  }
}

reset();
createWordDisplay();
updateDisplay();

document.onkeypress = function(evt) {
  if (!(lose || win)) {
    var charCode = evt.keyCode;
    charInput = String.fromCharCode(charCode).toLowerCase();
    cakepudding(charInput);
    updateDisplay();
  }
}

resetBtn.addEventListener('click',function() {
  reset();
  clearWordDisplay();
  createWordDisplay();
  updateDisplay();
})
