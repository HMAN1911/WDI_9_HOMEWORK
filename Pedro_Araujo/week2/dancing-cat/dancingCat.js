var movePixels = 5;
var delayMs =  50;
var catTimer = null;
var walkDirection = 1;

var img = document.getElementsByTagName('img')[0];
var change = true;
function catWalk() {

 var currentLeft = parseInt(img.style.left);
 img.style.left = (currentLeft + (movePixels * walkDirection)) + 'px';
 if (currentLeft > (window.innerWidth-img.width)/2  && change == true ) {

   catDance();
   setTimeout(startCatWalk(),3000);

  change = false;
 }
 if (currentLeft > (window.innerWidth-img.width)) {
   walkDirection = -1;
   img.src = "cat-walkBack.gif";

  } else if (currentLeft < 0) {
    walkDirection = 1;
    img.src = "cat-walk.gif";
    change = true;
  }
}



function startCatWalk() {
  // if (catTimer == null) {
  //   catTimer = window.setInterval(catWalk, delayMs);
  // }else {
    clearInterval(catTimer);
    catTimer = 0;
    movePixels = 5;
    catTimer = window.setInterval(catWalk, delayMs);
  //}
}

function stopCatWalk() {
  // movePixels = 0;
  // catTimer = window.setInterval(catWalk, delayMs);
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
// document.getElementById('dance-button').addEventListener('click',function(){
//     catDance();} );
