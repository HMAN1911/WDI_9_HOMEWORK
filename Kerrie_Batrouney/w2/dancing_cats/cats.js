var movePixels = 10;
var delayMs = 50;
var catTimer = null;
// var direction = 1;
var goRight = true;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];

  var currentLeft = parseInt(img.style.left);
  if (goRight) {
    img.style.left = (currentLeft + movePixels) + 'px';
    // if in middle change cat to http://www.lovethisgif.com/uploaded_images/72438-Bengal-Chatter-The-Cat-s-Meow-In-Bengal-Cat-Forums.gif
  }else{
    img.style.left = (currentLeft - movePixels) + 'px';

}
  if (currentLeft > (window.innerWidth-img.width)) {
    //flip cat
    img.style.transform = 'scaleX(-1)';
    goRight = false;
  }else if (currentLeft < 0) {
    img.style.transform = 'scaleX(1)';
    goRight=true;
  }
  // if in middle change cat to http://www.lovethisgif.com/uploaded_images/72438-Bengal-Chatter-The-Cat-s-Meow-In-Bengal-Cat-Forums.gif
  if (currentLeft>= window.innerWidth/2) {
    document.getElementById(catImg).src ="http://www.lovethisgif.com/uploaded_images/72438-Bengal-Chatter-The-Cat-s-Meow-In-Bengal-Cat-Forums.gif";
//set timeout for dancing
    setTimeout(stopCat, 1000);
  document.getElementById(catImg).src="http://www.anniemation.com/clip_art/images/cat-walk.gif";

}

  // if in middle change cat to http://www.lovethisgif.com/uploaded_images/72438-Bengal-Chatter-The-Cat-s-Meow-In-Bengal-Cat-Forums.gif
//   if (currentLeft>= window.innerWidth/2) {
//     document.getElementById(catImg).src ="http://www.lovethisgif.com/uploaded_images/72438-Bengal-Chatter-The-Cat-s-Meow-In-Bengal-Cat-Forums.gif";
// //set timeout for dancing
//change back to old cat


}


function startCatWalk() {
movePixels = 10;
//delayMs = 150;
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
  // if in middle change cat to http://www.lovethisgif.com/uploaded_images/72438-Bengal-Chatter-The-Cat-s-Meow-In-Bengal-Cat-Forums.gif
//   if (currentLeft>= window.innerWidth/2) {
//     document.getElementById(catImg).src ="http://www.lovethisgif.com/uploaded_images/72438-Bengal-Chatter-The-Cat-s-Meow-In-Bengal-Cat-Forums.gif";
// //set timeout for dancing
//     setTimeout(stopCat, 1000);
//   document.getElementById(catImg).src="http://www.anniemation.com/clip_art/images/cat-walk.gif";
//
// }

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
