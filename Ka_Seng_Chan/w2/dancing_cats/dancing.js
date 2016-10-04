console.log('its working');

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var catDirection = 1; // 1 -> moves right, 0 --> moves left
var catDance = 0;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);

  if (catDirection === 1) {
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }
  // If reached rightmost, moves left
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.transform = 'scaleX(-1)';
    catDirection = 0;
    catDance = 0;
  }
  // If reached leftmost, moves right
  if (currentLeft < 0) {
    catDirection = 1;
    img.style.transform = 'scaleX(1)';
    catDance = 0;
  }

  if (currentLeft >= (window.innerWidth-img.width)/2 - 5 && currentLeft <= (window.innerWidth-img.width)/2 + 5) {
    // console.log('middle');
    if (!catDance) {
      stopCatWalk();
      img.src = 'http://www.clipartkid.com/images/594/animation-bundle-animated-cats-jumping-playing-and-running-around-see-xL5d9E-clipart.gif';
      setTimeout(function(){
        img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
        restartCatWalk();
      },2000);
      catDance = 1;
    }
    //img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    //startCatWalk();
  }
}

function startCatWalk() {
  if (!catTimer) {
    movePixels = 10;
    catTimer = window.setInterval(catWalk, delayMs);
  }
}

function restartCatWalk() {
  if (!catTimer) {
    catTimer = window.setInterval(catWalk, delayMs);
  }
}

function stopCatWalk() {
  clearInterval(catTimer);
  catTimer = null;
}

function fasterCatWalk() {
  movePixels = 20;
}

document.getElementById('start-button').addEventListener('click',startCatWalk);
document.getElementById('stop-button').addEventListener('click',stopCatWalk);
document.getElementById('speed-button').addEventListener('click',fasterCatWalk);
