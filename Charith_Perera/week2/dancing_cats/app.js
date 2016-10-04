var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var backwards = false;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var img2 = document.getElementsByTagName('img')[1];
  var currentLeft = parseInt(img.style.left);
  if (!backwards) {
    img.style.left = (currentLeft + movePixels) + 'px';
  }
  else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }

  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.transform = "scaleX(-1)";
    backwards = true;
  }

  if (currentLeft < 0) {
    img.style.transform = "scaleX(1)";
    backwards = false;
  }

  if (currentLeft > ((window.innerWidth-img.width)/2) - (movePixels/2) &&
      currentLeft < ((window.innerWidth-img.width)/2) + (movePixels/2)) {
    swapCats(img, img2);
  }
}

function swapCats(catOne, catTwo) {
  stopCatWalk();
  catOne.style.display = "none";
  catTwo.style.left = catOne.style.left;
  catTwo.style.display = "block";

  setTimeout(function() {
    catTwo.style.display = "none";
    catOne.style.display = "initial";
    startCatWalk();
  },5000)
}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  clearInterval(catTimer);
}

function increaseSpeed() {
  movePixels += 10;
}

var startBtn = document.getElementById('start-button');
var stopBtn = document.getElementById('stop-button');
var fasterBtn = document.getElementById('speed-button');

startBtn.addEventListener('click', startCatWalk);
stopBtn.addEventListener('click', stopCatWalk);
fasterBtn.addEventListener('click', increaseSpeed);
