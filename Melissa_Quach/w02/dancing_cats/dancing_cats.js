var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var direction = 'right';
var idled = false;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);

  // Change direction if cat at edge of screen
  if (direction === 'right' && currentLeft > (window.innerWidth-img.width)) {
    direction = 'left';
    img.style.transform = '';
    idled = false;
  }
  else if (direction === 'left' && currentLeft <= 0) {
    direction = 'right';
    img.style.transform = 'rotateY(180deg)';
    idled = false;
  }

  // Set cat's position
  if (direction === 'right') {
    img.style.left = (currentLeft + movePixels) + 'px';
  }
  else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }

  // If cat midway through screen, stop cat
  if (!idled && passedMiddle(img, direction)) {
    showDancingCat(img);
  }
}

// Pause cat, play dancing cat gif, then resume walking animation
function showDancingCat(img) {
  stopCatWalk();
  img.src = 'http://67.media.tumblr.com/tumblr_m9hbpdSJIX1qhy6c9o1_400.gif';
  setTimeout(function() {
    img.src = 'http://67.media.tumblr.com/tumblr_lidxeme7yu1qhy6c9o1_400.gif';
    idled = true;
    startCatWalk();
  }, 2500);
}

// Check if center of cat image has passed midway point
function passedMiddle(img, direction) {
  var imageCenter = parseInt(img.style.left) + img.width / 2;
  var windowCenter = window.innerWidth / 2;

  if (direction === 'right') {
    return imageCenter > windowCenter;
  }
  else {
    return imageCenter < windowCenter;
  }
}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  window.clearInterval(catTimer);
  catTimer = null;
}

function speedUpCatWalk() {
  var isRunning = catTimer !== null;
  window.clearInterval(catTimer);
  if (delayMs > 5) {
    delayMs -= 5;
  }
  // Resume animation if not previously stopped
  if (isRunning) {
    startCatWalk();
  }
}

// Add event handlers
var startBtn = document.querySelector('#start-button');
var speedBtn = document.querySelector('#speed-button');
var stopBtn = document.querySelector('#stop-button');

startBtn.addEventListener('click', startCatWalk);
speedBtn.addEventListener('click', speedUpCatWalk);
stopBtn.addEventListener('click', stopCatWalk);
