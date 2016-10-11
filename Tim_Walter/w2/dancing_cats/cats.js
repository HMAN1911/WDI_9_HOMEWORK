console.log('Dancing Cats...');

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var direction = 1;
var currentLeft = 0;


function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  currentLeft = parseInt(img.style.left);
  console.log(currentLeft);
  if (direction>0) {
    img.style.transform = 'scaleX(1)';
  } else {
    img.style.transform = 'scaleX(-1)';
  }
  img.style.left = (currentLeft + (movePixels*direction)) + 'px';
  if (window.innerWidth / currentLeft > 2.4 && window.innerWidth / currentLeft < 2.45 ) {
    movePixels = 0;
    catDance();
  }
  if (currentLeft > (window.innerWidth-img.width)) {
    direction = -1;
  } else if (currentLeft < 0) {
    direction = 1;
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

document.getElementById('start-button').addEventListener('click', function() {
  movePixels = 10;
  clearInterval(catTimer);
  startCatWalk();
});

document.getElementById('speed-button').addEventListener('click', function() {
  movePixels = 20;
  clearInterval(catTimer);
  startCatWalk();
});

document.getElementById('stop-button').addEventListener('click', function() {
  movePixels = 0;
  clearInterval(catTimer);
  startCatWalk();
});

function catDance() {
  clearInterval(catTimer);
  document.getElementById('cat').src = "http://rs791.pbsrc.com/albums/yy191/Aloux/vibrating_cat.gif~c200";
  setTimeout(danceTime, 2000)
}

function danceTime () {
  document.getElementById('cat').src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  clearInterval(catTimer);
  movePixels = 10;
  startCatWalk();
}
