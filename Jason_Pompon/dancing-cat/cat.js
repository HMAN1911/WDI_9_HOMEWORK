var movePixels = 10;
var delayMs = 50;
var quickerDelay = 25;
var catTimer = null;


function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.transform = 'scaleX(1)';
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft >= (window.innerWidth-img.width)/2) {
    catImg = document.getElementById('catImg').src='http://i.giphy.com/Qd8Fwmm0PgTcc.gif';
    // setTimeout(startwalkBack, 5000);
    clearInterval(catTimer);
    setTimeout(startCatWalk(), 5000);
  }
  if (currentLeft > (window.innerWidth-img.width)) {
    catImg = document.getElementById('catImg').src='http://www.anniemation.com/clip_art/images/cat-walk.gif';
    startwalkBack();
  }
}

function walkBack() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.transform = 'scaleX(-1)';
  img.style.left = (currentLeft - movePixels) + 'px';
  if (currentLeft <= 0) {
    startCatWalk();
  }
}


function startCatWalk() {
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
}

function startwalkBack() {
  clearInterval(catTimer);
  catTimer = window.setInterval(walkBack, delayMs);
}

function speedCatWalk() {
  movePixels += 5;
}

var stopMove = function() {
    clearInterval(catTimer);
}

var move = document.getElementById('start-button');
move.addEventListener('click', startCatWalk);

var moveFast = document.getElementById('speed-button');
moveFast.addEventListener('click', speedCatWalk);

var stop = document.getElementById('stop-button');
stop.addEventListener('click', stopMove);
