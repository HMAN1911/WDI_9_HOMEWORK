var selection = ['cake','triceratop','kotatsu','asylum','parabolic','beetroot','tiramisu','byte','centrifugal','mammals','rhetoric','toast','frozen','zenith','xylophones','programming','singularity','chocolate','cheesecake','lamington'];

var currentWord;

var word = document.getElementById('word');
var attempts = document.getElementById('cakes');
var maxAttempts = attempts.textContent.length;

function restart() {
  currentWord = Math.floor(Math.random()*selection.length);
  word.textContent = "";
  for (var i=0;i<currentWord.length;i++) {
    word.textContent+="_";
  }
  for (var i=0;i<maxAttempts;i++) {

  }
}

function enterKey(keyCode) {

}

function checkForLetter(letter) {

}

document.getElementsByClassName('body')[0].addEventListener('keyup',function() {
  if (event.keyCode >== 65 && event.keyCode <== 90) {
      enterKey(event.keyCode);
  } else if (event.keyCode === 8) {
      restart();
  }
});
