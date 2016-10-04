
var movePixels = 10;
var delayMs = 50;
var catTimer = null;
function catWalk() {
var img = document.getElementsByTagName('img')[0];
var currentLeft = parseInt(img.style.left);
img.style.left = (currentLeft + movePixels) + 'px';
if (currentLeft > (window.innerWidth-img.width)) {
  img.style.left = '0px';
}
}



// Q1. - Start Button

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

var startBtn = document.getElementById('start-button');
  startBtn.addEventListener('click',startCatWalk);


// Q2. - Stop Button

function stopCatWalk() {
 clearInterval(catTimer)
  }

var stopBtn = document.getElementById('stop-button');
  stopBtn.addEventListener('click',stopCatWalk);


// Q3. - Speed up Button

function fasterCatWalk() {
  movePixels = movePixels + 10;
}

var speedBtn = document.getElementById('speed-button');
  speedBtn.addEventListener('click',fasterCatWalk);


// Q4. - Return from edge of page

// Note - tried a couple of things but didn't work - time for bed will try again in the morning
