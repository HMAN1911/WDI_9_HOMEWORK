// Factory function - create object storing hangman state
var createHangmanModel = function(turnLimit) {
  var availableWords = [
    'javascript',
    'software',
    'recursion',
    'factory',
    'architecture',
    'binary'
  ];

  var lettersGuessed = [];
  var turnsRemaining = turnLimit;
  var word = '';
  var mask = '_';
  var maskedWord = [];

  // Fetch random word from available list
  var getRandomWord = function() {
    return availableWords[Math.floor(Math.random() * availableWords.length)];
  }

  return {
    getLettersGuessed: function() {
      return lettersGuessed;
    },
    getTurnsRemaining: function() {
      return turnsRemaining;
    },
    getMaskedWord: function() {
      return maskedWord;
    },
    // Initialize game state
    start: function() {
      turnsRemaining = turnLimit;
      lettersGuessed = [];
      word = getRandomWord();

      // Reset mask
      maskedWord = [];
      for (var i = 0; i < word.length; i++) {
        maskedWord.push(mask);
      }
    },
    // Submit user's guess
    guess: function(letter) {
      if (lettersGuessed.indexOf(letter) !== -1) {
        return false;
      }

      // If found, reveal letter in maskedWord
      for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          maskedWord[i] = letter;
        }
      }

      lettersGuessed.push(letter);
      turnsRemaining--;
      return true;
    },
    revealWord: function() {
      maskedWord = word.split('');
    },
    isCorrect: function() {
      for (var i = 0; i < word.length; i++) {
        if (maskedWord[i] === mask) {
          return false;
        }
      }
      return true;
    },
    isFinished: function() {
      return this.isCorrect() || turnsRemaining === 0;
    }
  }
};

// Update DOM to match game state
var updateUI = function() {
  turnCountElem.innerHTML = 'Turns remaining: ' + hangman.getTurnsRemaining();
  lettersGuessedElem.innerHTML = 'Letters guessed: ' + hangman.getLettersGuessed().join(', ');
  wordElem.innerHTML = '';

  wordElem.innerHTML = hangman.getMaskedWord().join(' ');
};


// Grab DOM elements
var turnCountElem = document.querySelector('#turn-count');
var lettersGuessedElem = document.querySelector('#letters-guessed');
var wordElem = document.querySelector('#word');
var characterInput = document.querySelector('#character');
var submitBtn = document.querySelector('form button');

var hangman = createHangmanModel(15);

// Register event listeners
// Initialize game on load
window.addEventListener('load', function() {
  hangman.start();
  updateUI();
});

// Handle submit action
// Add user's guess to game state
document.body.addEventListener('keydown', function(e) {
  if (!hangman.isFinished()) {
    var char = e.key.toLowerCase();
    var isValid = true;

    if (!char.match(/^[a-z]$/)) {
      isValid = false;
    }
    else if (!hangman.guess(char)) {
      isValid = false;
    }

    if (!isValid) {
      // TODO: Show error
    }
    // If game over, show word
    else if (hangman.isFinished()) {
      hangman.revealWord();
    }

    updateUI();
  }
});

// Restart game
document.querySelector('#new-game-btn').addEventListener('click', function() {
  hangman.start();
  updateUI();
});
