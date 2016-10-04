var movePixels = 10;
var delayMs =  50;
var catTimer = null;
var walkDirection = 1;

var img = document.getElementsByTagName('img')[0];
var change = true;
function catWalk() {

 var currentLeft = parseInt(img.style.left);
 img.style.left = (currentLeft + (movePixels * walkDirection)) + 'px';
 //if image is in the middle of the page, call catDance function
 if (currentLeft > (window.innerWidth-img.width)/2 -10 &&
     currentLeft < (window.innerWidth-img.width)/2 +10 && change == true ) {

   stopCatWalk();
   catDance();
   setTimeout(startCatWalk,3000);
  change = false;
 }
 if (currentLeft > (window.innerWidth-img.width)) { //If image is at the right edge
   walkDirection = -1;                              // change for flipped image
   img.style.transform = 'scaleX(-1)'             // and make ready to change again
   change = true;                                 // to cat dance image

 } else if (currentLeft < 0) {          // if image is at the left edge
    walkDirection = 1;                  // change for flipped image
    img.style.transform = 'scaleX(1)'  // and make ready to change again
    change = true;                      // to cat dance image
  }
}

function startCatWalk() {
    clearInterval(catTimer);
    catTimer = 0;
    movePixels = 5;
    catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  movePixels = 0;
  clearInterval(catTimer);
}

function speedCatWalk() {
  movePixels = movePixels + (movePixels * 0.5);
}

function catDance() {
  img.src = "cat-dancing.gif";
  setTimeout( function() {img.src = "cat-walk.gif";} , 3000);
}


document.getElementById('start-button').addEventListener('click',function(){
  startCatWalk();} );
document.getElementById('stop-button').addEventListener('click',function(){
    stopCatWalk();} );
document.getElementById('speed-button').addEventListener('click',function(){
    speedCatWalk();} );
