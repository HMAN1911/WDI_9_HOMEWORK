var movePixels = 1; //bigger the number the larger the steps
var delayMs = 25;  //higher the number the slower it is
var speed = 15
var catTimer = null;
var cat = document.getElementsByTagName('img')[0]; //gets the cat image

function catWalk() {
  //turns the position of the cat at 0px left into a variable
  var position = parseInt(cat.style.left);
  //adds current position to the move pixels varibale
  cat.style.left = (position + movePixels) + 'px';
  //if reach the middle
  var middle = window.innerWidth/2;
  console.log(middle);
  if(position === middle){
      console.log(middle);
    }
  //if position of the cat is bigger than the window width minus the image width
  if (position > (window.innerWidth - cat.width)) {
    // cat.style.left = '1034px';
    walkBack();
    flip();
  }
}

// function repeat(){
//   var position = parseInt(cat.style.left);
//   if(position < 0){
//   cat.style.backgroundColor = 'blue';
//   flop();
//   catWalk();
//  }
// }

// function repeatWalk() {
//   delayMs = 25;
//   movePixels = 5;
//   catTimer = window.setInterval(repeat, delayMs);
//   console.log('coming back');
// }

function startCatWalk() {
  delayMs = 25;
  movePixels = 5;
  catTimer = window.setInterval(catWalk, delayMs);
  console.log('working');
}

function speedUp(){
  catTimer = window.setInterval(catWalk, speed);
  console.log('working');
}

function stopCatWalk(){
  movePixels = 0; //bigger the number the larger the steps
  delayMs = 0;
  console.log('working');
}

function walkBack(){
    catTimer = window.setInterval(back, delayMs);
}

function back(){
    var position = parseInt(cat.style.left);
    cat.style.left = (position - movePixels) + 'px';
    console.log('im coming back');
}

function flip(){
  cat.style.transform = 'scaleX(-1)';
}

function flop(){
    cat.style.transform = 'scaleX(1)';
}


//put buttons in variables
var startButton = document.getElementById('start-button');
var stopButton = document.getElementById('stop-button');
var speedButton = document.getElementById('speed-button')


//event listener - if button is clicked run the function
startButton.addEventListener('click', startCatWalk);
speedButton.addEventListener('click', speedUp);
stopButton.addEventListener('click', stopCatWalk);


// function dance(){
//   var catPosition = parseInt(cat.style.left);
//   var page = window.innerWidth;
//   var middle = page/2;
//     console.log(catPosition)
//   }
//
// dance();
