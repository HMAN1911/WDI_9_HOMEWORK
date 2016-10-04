// Move the above code into a separate JS file!
//
// Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
//
// Add an event listener to the stop button, so that the cat stops moving when clicked.
//
// Add an event listener to the speed button, so that the cat moves faster when its clicked. When the cat reaches the edge of the screen, have her walk back to the start. Repeat forever.
//
// Make sure your code works even when the screen is resized (you will need to find the window width with Javascript.
//
// BONUS: When the cat reaches half way, have her stop and replace the image with a dancing cat gif for a moment, then resume.

var movePixels = 10;
var delayMs = 50;
var direction = 1;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + (movePixels * direction)) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    direction = -1;
 } else if (currentLeft < 0) {
   direction = 1;
 }
}
function startCatWalk() {
  clearInterval(catTimer);
  catTimer = 0;
  movePixels = 10;
  catTimer = window.setInterval(catWalk, delayMs);
}

function goFaster() {
  movePixels = movePixels + (movePixels * 0.5);
}

function stopCatWalk() {
  movePixels = 0;
  clearInterval(catTimer);
}

function scareCat() {
  document.getElementsByTagName('img')[0].src="http://www.netanimations.net/animated_cat_delay.gif";
  var audio = new Audio('audio/TomCat-Mr_Smith-2055290520.wav');
audio.play();
  movePixels = 0;
  clearInterval(catTimer);
}

function dancingCat() {
  document.getElementsByTagName('img')[0].src="http://www.lovethisgif.com/uploaded_images/72438-Bengal-Chatter-The-Cat-s-Meow-In-Bengal-Cat-Forums.gif";
  movePixels = 0;
  clearInterval(catTimer);
}


var startBtn = document.getElementById('start-button');
startBtn.addEventListener('click', startCatWalk);

var speedBtn = document.getElementById('speed-button');
speedBtn.addEventListener('click', goFaster);

var stopBtn = document.getElementById('stop-button');
stopBtn.addEventListener('click', stopCatWalk);

var scareBtn = document.getElementById('scare-button');
scareBtn.addEventListener('click', scareCat);

var danceBtn = document.getElementById('dance-button');
danceBtn.addEventListener('click', dancingCat);
