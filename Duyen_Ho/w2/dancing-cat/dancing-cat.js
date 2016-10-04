console.log('dancing-cat');

var movePixels = 10;
var delayMs = 50;
var catTimer = null;    // calculates interval

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  // var img = document.getElementsById('dancing-cat');
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';

  // use truthy & falsey
  // declare new var and set to boolean to anchor comparison
  var forward = true;

  // to trigger backward
  if (forward && (currentLeft > (window.innerWidth - img.width))) {
    forward = false;
  }
  // to trigger forward
  if (!forward && (currentLeft <= 0)) {
    forward = true;
  }
  // action to take - forward or backward
  if (forward) {
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }

  // if ((window.innerWidth / 2)) {
  //   // console.log('half-way');
  //   changeCat();
  // }

}


function changeCat() {
  var newImg = '<img src="http://i.giphy.com/j1GXRCk4CAPio.gif">';
  document.getElementById('info').appendChild(newImg);

  // need to specify position of newImg
  // toggle class off for img[0] - assign ID in HTML
  // need to setTimeout on changeCat & possibly toggle class on for img[0]
  // cat needs to resume from function exit

}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
  console.log('startCatWalk: ' + catTimer);
}

function stopCatWalk() {
  clearInterval(catTimer);
}

function speedCatWalk() {

  // need condition to turn on inly if start has been fired
  // var currentLeft = parseInt(img.style.left);
  // img.style.left = (currentLeft + movePixels) + 'px';
  // if (img.style.left !== 0) {

    // already adds movePixels to catTimer
    startCatWalk();
  // }
}

var startBtn = document.getElementById('start-button');
startBtn.addEventListener('click', startCatWalk)

var stopBtn = document.getElementById('stop-button');
stopBtn.addEventListener('click', stopCatWalk);

var speedBtn = document.getElementById('speed-button')
speedBtn.addEventListener('click', speedCatWalk);





// <p>Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
// <p>Add an event listener to the stop button, so that the cat stops moving when clicked.
// <p>Add an event listener to the speed button, so that the cat moves faster when it's clicked.
// <p>When the cat reaches the edge of the screen, have her walk back to the start. Repeat forever.
// <p>Make sure your code works even when the screen is resized (you will need to find the window width with Javascript.
// <p>BONUS: When the cat reaches half way, have her stop and replace the image with a dancing cat gif for a moment, then resume.
