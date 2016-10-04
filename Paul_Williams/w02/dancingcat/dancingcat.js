console.log('test');

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var img = document.getElementsByTagName('img')[0];
var switched = false;

var startButton = document.getElementById('start-button');
var speedButton = document.getElementById('speed-button');
var stopButton = document.getElementById('stop-button');

function catWalk() {

  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';

  if (currentLeft > ((window.innerWidth / 2) - (img.width / 2)) && !switched && movePixels > 0) {
    pauseCatWalk();
    img.src = "http://rs384.pbsrc.com/albums/oo282/carlymadeline/5174033d6d8d2b84aa2f223bf798513c.gif~c200";
    switched = true;
    setTimeout(startCatWalk, 5000);
  }
  if (currentLeft < ((window.innerWidth / 2) - (img.width / 2)) && !switched && movePixels < 0) {
    pauseCatWalk();
    img.src = "http://rs384.pbsrc.com/albums/oo282/carlymadeline/5174033d6d8d2b84aa2f223bf798513c.gif~c200";
    switched = true;
    setTimeout(startCatWalk, 5000);
  }

  if (currentLeft > (window.innerWidth - img.width)) {
    img.style.left = (window.innerWidth - img.width) + 'px';
    movePixels *= -1;
    img.style.transform = 'scaleX(-1)';
    switched = false;
  }
  if (currentLeft < 0) {
    img.style.left = '0px';
    movePixels *= -1;
    img.style.transform = '';
    switched = false;
  }
  
}

function startCatWalk() {
  img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  if (catTimer === null) {
    catTimer = window.setInterval(catWalk, delayMs);
  }
}

function stopCatWalk() {
  clearInterval(catTimer);
  catTimer = null;
  if (movePixels > 0) {
    movePixels = 10;
  } else {
    movePixels = -10;
  }
}

function pauseCatWalk() {
  clearInterval(catTimer);
  catTimer = null;
}

function speedUp() {
  if (catTimer !== null) {
    pauseCatWalk();
    if (movePixels > 0) {
      movePixels += 10;
    } else {
      movePixels -= 10;
    }
    startCatWalk();
  }
}

startButton.addEventListener('click', startCatWalk);
stopButton.addEventListener('click', stopCatWalk);
speedButton.addEventListener('click', speedUp);