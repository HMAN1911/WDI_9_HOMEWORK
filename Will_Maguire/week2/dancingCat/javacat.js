var movePixels = 10;
var delayMs = 50;
var catTimer = null;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
    if (currentLeft > (window.innerWidth-img.width)) { //resets loctation
   var currentLeft = parseInt(img.style.left);
          img.style.left = (currentLeft - movePixels) + 'px';
          //img.style.left = '0px';
  }
}

//must set 0 property left in catWalk and use moonWalkto call catWalk
function startCatWalk() {
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  clearInterval(catTimer);
}




document.getElementById("start-button").addEventListener('click', catWalk);
document.getElementById("speed-button").addEventListener('click', startCatWalk);
document.getElementById("stop-button").addEventListener('click', stopCatWalk);
