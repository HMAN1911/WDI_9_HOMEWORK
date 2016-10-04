var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var direction = 1;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels*direction) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    //img.style.left = '0px';
    direction = -1;
  }else if (currentLeft < 0) {
    direction = 1;
  }
  }



// var direction = 1;
// function catWalk() {
//  var img = document.getElementsByTagName('img')[0];
//  var currentLeft = parseInt(img.style.left);
//  img.style.left = (currentLeft + (movePixels*direction)) + 'px';
//  if (currentLeft > (window.innerWidth-img.width)) {
//    direction = -1;
//  } else if (currentLeft < 0) {
//    direction = 1;
//  }
// }

function startCatWalk() {
movePixels = 10;
//delayMs = 150;
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
}

document.getElementById('start-button').addEventListener('click', startCatWalk);




function speedUpCatWalk() {
movePixels = 20;
//delayMs = 50;
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
}

document.getElementById('speed-button').addEventListener('click', speedUpCatWalk);


function stopCat() {
  movePixels = 0;
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
}

document.getElementById('stop-button').addEventListener('click', stopCat);

function reverseCat() {
  movePixels = -10;
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
}

document.getElementById('reverse-button').addEventListener('click', reverseCat);


//
// var poop = function(){
//   // console.log('playing with your phone');
//   document.body.style.backgroundColor = 'darkolivegreen';
// }
//
// var flush = function(){
//   document.body.style.backgroundColor = 'pink';
// }
// var poopDelay = function(){
//   setTimeout(poop, 1000);
// }
//
// var poopBtn = document.getElementById('poop-button')
// poopBtn.addEventListener('click', poopDelay);
//
// var flushBtn = document.getElementById('flush-button')
// flushBtn.addEventListener('click', flush);
