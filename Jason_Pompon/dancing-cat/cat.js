var movePixels = 10;
var delayMs = 50;
var quickerDelay = 25;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function speedCatWalk() {
  catTimer = window.setInterval(catWalk, quickerDelay);
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
