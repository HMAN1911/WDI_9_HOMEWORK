var movePixels = 10;
var delayMs = 50;
var catTimer = null;

var img = document.getElementsByTagName('img')[0];

var halfWay = function() {
  return (window.innerWidth-img.width)*0.5;
}
var go = function(){
  return movePixels = 10;
}
// var goBack = function(){
//   return movePixels = -10;
// }

function catWalk() {

  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';

  // if (currentLeft > halfWay() && currentLeft < (halfWay()+20) ) {
  //   console.log('dance!');
  //   movePixels = 0;
  //   setTimeout(go, 2000);
  //   document.getElementsByTagName('img')[0].src="https://media.giphy.com/media/fH352dW1DbGXm/giphy.gif";
  // }

  // if (currentLeft < halfWay()) {
  //   console.log('dance!');
  //   movePixels = 0;
  //   setTimeout(goBack, 2000);
  //   // var img = document.getElementsByTagName('img')[0].src="https://media.giphy.com/media/fH352dW1DbGXm/giphy.gif";
  // }

  if (currentLeft >= (window.innerWidth-img.width)) {
    movePixels = -10;
    document.getElementsByTagName('img')[0].src="http://flipapicture.com/uploaded_images/044540_cat-walk.gif";
  }
  if (img.style.left <= '0px') {
    movePixels = 10;
    document.getElementsByTagName('img')[0].src="http://www.anniemation.com/clip_art/images/cat-walk.gif";
  }

  // if (movePixels > 0) {
  //   document.getElementsByTagName('img')[0].src="http://www.anniemation.com/clip_art/images/cat-walk.gif";
  // }
  // if (movePixels < 0) {
  //   document.getElementsByTagName('img')[0].src="http://flipapicture.com/uploaded_images/044540_cat-walk.gif";
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
    document.getElementsByTagName('img')[0].src="cat-walk.gif";
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
