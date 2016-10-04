var movePixels = 1;
var delayMs = 50;
var catTimer = null;
var goRight = true;

function catWalk() {
  console.log("catWalk called");
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  if (goRight && currentLeft >= (window.innerWidth-img.width)) {
    goRight = false;
    img.style.transform = "rotateY(180deg)";
  } else if (currentLeft < 0 && !goRight) {
    goRight = true;
    img.style.transform = "";
  }
  if (goRight){
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }
  if (img.src !== "http://www.anniemation.com/clip_art/images/cat-walk.gif"){
    img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  } else if (currentLeft + (img.width / 2) === window.innerWidth / 2){
    img.src = "http://www.netanimations.net/DANCING%20BLACK%20CAT.gif";
    stopCat();
    setTimeout(startCatWalk, 5000);
  }
}

function startCatWalk() {
  console.log("startCatWalk called");
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCat(){
  console.log("Stop button clicked");
  clearInterval(catTimer);
}

function fastCat(){
  delayMs = delayMs / 2;
  if (catTimer){
    stopCat();
    startCatWalk();
  }
}

function slowCat(){
  delayMs = delayMs * 2;
  if (catTimer){
    stopCat();
    startCatWalk();
  }
}

window.onload = function(){
  //<p>Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
  document.getElementById("start-button").addEventListener("click", startCatWalk);
  //<p>Add an event listener to the stop button, so that the cat stops moving when clicked.
  document.getElementById("stop-button").addEventListener("click", stopCat);
  //<p>Add an event listener to the speed button, so that the cat moves faster when it's clicked.
  document.getElementById("fast-button").addEventListener("click", fastCat);
  document.getElementById("slow-button").addEventListener("click", slowCat);
  //<p>When the cat reaches the edge of the screen, have her walk back to the start. Repeat forever.
  //<p>Make sure your code works even when the screen is resized (you will need to find the window width with Javascript.
  //<p>BONUS: When the cat reaches half way, have her stop and replace the image with a dancing cat gif for a moment, then resume.
}
