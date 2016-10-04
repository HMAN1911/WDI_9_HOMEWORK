var movePixels = 10;
var delayMs = 50;
var catTimer = null;
// image moves from left to right
var walkForward = true;

// declared the buttons to call the respective functions when clicked.
var start = document.getElementById('start-button').addEventListener('click', startCatWalk);
var speedUp = document.getElementById('speed-button').addEventListener('click', speed);
var stop = document.getElementById('stop-button').addEventListener('click', stopCatWalk);

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = '0px';
// image reached end of screen on right hand side
  if (walkForward && (currentLeft > (window.innerWidth-img.width))) {
    walkForward = false;
  }
  // image reached end of screen on left hand side
  if (!walkForward && (currentLeft <= 0)) {
    walkForward = true;
  }
  if (walkForward) {
    img.style.left = (currentLeft + movePixels) + 'px';//img moves left to right
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';//img moves right to left
  }
}
// Calls the catWalk function every 50ms and moves image by 10px.
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}
// stops the catWalk function from been called.
function stopCatWalk() {
  window.clearInterval(catTimer);
}

// Increased the frequency of the function been called to 20ms.
function speed() {
  catTimer = window.setInterval(catWalk, 20);
}



// function catWalk() {
//   var img = document.getElementsByTagName('img')[0];
//   var currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + movePixels) + 'px';
//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = '0px';
//   }
// }
//
// function speed() {
//   movePixels = movePixels + 5;
//   var pace = movePixels * 20;
// }
