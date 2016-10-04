var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var isDirectionLeft = true;
var passedMiddle = false;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  if (isDirectionLeft) {
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
    img.style.left = (currentLeft + (movePixels*-1)) + 'px';
  }
  if (currentLeft > (window.innerWidth-img.width)) {
    isDirectionLeft=false;
    passedMiddle=false;
  } else if (currentLeft<0) {
    isDirectionLeft=true;
    passedMiddle=false;
  }
  if (currentLeft+img.width/2>(window.innerWidth/2)-(movePixels/2)&&
  currentLeft+img.width/2<(window.innerWidth/2)+(movePixels/2)&&(!passedMiddle)) {
    clearInterval(catTimer);
    img.src="http://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-4.gif";
    setTimeout(function() {img.src="http://www.anniemation.com/clip_art/images/cat-walk.gif";
      startCatWalk();},4500);
    passedMiddle=true;
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

var startBtn = document.getElementById('start-button');
startBtn.addEventListener('click',startCatWalk);

var speedBtn = document.getElementById('speed-button');
speedBtn.addEventListener('click',function() {
  movePixels+=2.5;
});

var stopBtn = document.getElementById('stop-button');
stopBtn.addEventListener('click',function() {
  clearInterval(catTimer);
});
