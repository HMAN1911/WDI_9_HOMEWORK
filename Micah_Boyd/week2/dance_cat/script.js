var movePixels = 10;
var delayMs = 50;
var catTimer = null;

function catWalk() {

  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';

  if (currentLeft > (window.innerWidth-img.width)) {
    movePixels = -10;
  }
  if (img.style.left <= '0px') {
    movePixels = 10;
  }
  // var halfWay = function() {
  //   (window.innerWidth-img.width)*0.5;
  // }
  // if (currentLeft > halfWay) {
  //   var img = document.getElementsByTagName('img')[0].src="https://media.giphy.com/media/fH352dW1DbGXm/giphy.gif";
  // }
}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

// search html for 'start' button
var startBtn = document.getElementById('start-button');
// add a click event to the start button, executes the function that makes the cat move
startBtn.addEventListener('click', startCatWalk);

function startCatSpeed() {
  movePixels = movePixels*2;
}

// same as 'start' button, changed id to speed and speed function.
var speedBtn = document.getElementById('speed-button');
speedBtn.addEventListener('click', startCatSpeed);

function stopCat() {
    movePixels = 0;
}

var stopBtn = document.getElementById('stop-button');
stopBtn.addEventListener('click', stopCat);

// Stop button code below:
//
// function catStop() {
//   var img = document.getElementsByTagName('img')[0];
//   var currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + noPixels) + 'px';
//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = '0px';
//   }
// }
// function startCatStop() {
//   catTimer = window.setInterval(catStop, delayMs);
// }
//
// var stopBtn = document.getElementById('stop-button');
// speedBtn.addEventListener('click', startCatStop);
