var movePixels = 10;
var delayMs = 100;
var catTimer = null;
var catStop = false;
var goRight = true;
var currentLeft;

var twoCats = [document.getElementById('cat1'),document.getElementById('cat2')]

function catWalk() {
  for (var i = 0; i < twoCats.length; i++) {

    currentLeft = parseInt(twoCats[i].style.left);

    var moveRight = (currentLeft + movePixels) + 'px';
    var moveLeft = (currentLeft - movePixels) + 'px';

    console.log(currentLeft);

    if (currentLeft <= (window.innerWidth-twoCats[i].width) && goRight == true) {
      goRight = true;
    } else if (currentLeft > (window.innerWidth-twoCats[i].width)) {
      goRight = false;
    } else if (currentLeft <= 0) {
      goRight = true;
    }

    if (goRight) {
       twoCats[i].style.left = moveRight;
     } else {
       twoCats[i].style.left = moveLeft;
     }

     if (currentLeft < ((window.innerWidth-twoCats[i].width)/2)) {
       var isLeftSide = true;
     } else {
       var isLeftSide = false;
     }

     if (isLeftSide && currentLeft + 10 > ((window.innerWidth-twoCats[i].width)/2) ) {
       document.getElementById('cat1').src='http://3.bp.blogspot.com/-hEPXEJ1DUmE/T6DQD5bBcmI/AAAAAAAAANk/R02Yj1y7x-g/s1600/catface.png';
       document.getElementById('cat1').width='500';
     } else if(!isLeftSide && currentLeft - 10 < ((window.innerWidth-twoCats[i].width)/2)) {
       document.getElementById('cat1').src='http://3.bp.blogspot.com/-hEPXEJ1DUmE/T6DQD5bBcmI/AAAAAAAAANk/R02Yj1y7x-g/s1600/catface.png';
       document.getElementById('cat1').width='500';
     } else {
       document.getElementById('cat1').src='http://rs791.pbsrc.com/albums/yy191/Aloux/vibrating_cat.gif~c200';
       document.getElementById('cat1').width='300';
    }
  }
}

function fasterCatWalk() {
  window.clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs-=10);
}

function startCatWalk() {
  window.clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  window.clearInterval(catTimer)
}

var startBtn = document.getElementById('start-button');
var stopBtn = document.getElementById('stop-button');
var speedBtn = document.getElementById('speed-button');

startBtn.addEventListener('click',startCatWalk);
stopBtn.addEventListener('click',stopCatWalk);
speedBtn.addEventListener('click',fasterCatWalk);
