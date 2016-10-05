var movePixels = 10;
var delayMs = 50;
var direction =1;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);

  img.style.left = (currentLeft +( movePixels*direction)) + 'px';
  if (currentLeft >(window.innerWidth-img.width)) {
    direction = -1;}
    else if (currentLeft<0){
    direction =1
  }
}


function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);


}



var startBtn = document.getElementById('start-button');

startBtn.addEventListener('click',function(){
  startCatWalk();
});

function SpeedThisCat(){
  catTimer2=window.setInterval(catWalk, 50);
}
var speedBtn = document.getElementById('speed-button');
speedBtn.addEventListener('click', SpeedThisCat);


var pauseBtn = document.getElementById('stop-button');
pauseBtn.addEventListener('click', function(){
  clearInterval(catTimer)});
