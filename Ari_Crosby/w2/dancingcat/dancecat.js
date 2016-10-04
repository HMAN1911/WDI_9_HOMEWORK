
var movePixels = 10; //10
var delayMs = 50; //50
var catTimer = null;

// Start
function catWalk() {
  var img = document.getElementsByTagName('img')[0]; //grabs image, sets a var

  var currentLeft = parseInt(img.style.left); //converts para to an integer

  img.style.left = (currentLeft + movePixels) + 'px'; //position of img on the page

  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs); // timed function para's
}

var startBtn = document.getElementById('start-button');
  startBtn.addEventListener('click', function() {
    startCatWalk() });


//Stop
function stopCatWalk() {
  movePixels = 0;
}

var stopBtn = document.getElementById('stop-button');
stopBtn.addEventListener('click', function() {
  stopCatWalk() });

/* Faster
function catRun() {
  movePixels = movePixels * 2 ;
  }

  var runBtn = document.getElementById('speed-button');
  stopBtn.addEventListener('click', function() {
    catRun() });
    */
