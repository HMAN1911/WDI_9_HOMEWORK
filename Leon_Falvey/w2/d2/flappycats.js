// Constants and variables. Because it is clearer if I put them at the top.
// I think.
var gap = 100; // Gap between top block and bottm block
var accel = 1; //Current acceleration of Nyan Cat
var vertSpeed = 0; //vertical speed of Nyan Cat
var blockSpeed = -20; // Horizontal 'speed' of blocks

var minHeight = 50; // Minimum Height of blocks

var running = false;
var main = null;

// The screen is immoral. There are one, two, three, one
// two! Two problems with it. It must be converted because it is immoral!
var scr = document.createElement("div");
scr.style.backgroundColor="blue";
scr.style.zIndex = 0;
scr.style.width = '650px';
scr.style.height = '400px';
scr.style.border = '2px solid black';
scr.style.margin = '0 auto';
scr.style.position = 'absolute';
scr.addEventListener('click',function() {
  if (running) {
  vertSpeed=-20;}}); // makes nyan cat fly up;
document.body.appendChild(scr);

// A hack to hide new block items when they are created
// and creates that nice sliding in effect.
var curt = document.createElement("div");
curt.style.backgroundColor = "green";
curt.style.zIndex = 2;
curt.style.left = '600px'
curt.style.width = '50px';
curt.style.height = '400px';
curt.style.border = 'none';
curt.style.position = 'absolute';
scr.appendChild(curt);

// Behold the Nyan Cat! Have faith in Nyan Cat, gain Eternal Life!
var cat = document.createElement("img");
cat.style.zIndex = 1;
cat.src="nyan-cat-500-300.gif";
cat.style.width = '50px';
cat.style.height = '30px';
cat.style.left = '200px';
cat.style.top = '130px';
cat.style.position = 'absolute';
scr.appendChild(cat);

// 2 Queues (Really just an array treated like a queue)(we might learn this later)
// which each hold all the top and bottom blocks.
var topBlocks = [];
var botBlocks = [];

// creates a new top and bottom block which are then shoved into the queues above.
function newBlocks() {
  var extraHeightTop = Math.floor(Math.random()*(150-minHeight));
  var extraHeightBot = 150 - minHeight - extraHeightTop;

  topBlocks.push(document.createElement("div"));
  topBlocks[topBlocks.length-1].style.zIndex = 1;
  topBlocks[topBlocks.length-1].style.position = 'absolute';
  topBlocks[topBlocks.length-1].style.left="600px";
  topBlocks[topBlocks.length-1].style.top="0px";
  topBlocks[topBlocks.length-1].style.width="50px";
  topBlocks[topBlocks.length-1].style.backgroundImage="url('rainbow.png')";
  topBlocks[topBlocks.length-1].style.backgroundRepeat="repeat-x";
  topBlocks[topBlocks.length-1].style.height=(minHeight+extraHeightTop)+"px";
  scr.appendChild(topBlocks[topBlocks.length-1]);

  botBlocks.push(document.createElement("div"));
  botBlocks[botBlocks.length-1].style.zIndex = 1;
  botBlocks[botBlocks.length-1].style.position = 'absolute';
  botBlocks[botBlocks.length-1].style.left="600px";
  botBlocks[botBlocks.length-1].style.top=(minHeight+extraHeightTop+gap)+"px";
  botBlocks[botBlocks.length-1].style.width="50px";
  botBlocks[botBlocks.length-1].style.backgroundImage="url('rainbow.png')";
  botBlocks[botBlocks.length-1].style.backgroundRepeat="repeat-y";
  botBlocks[botBlocks.length-1].style.height=(minHeight+extraHeightBot)+"px";
  scr.appendChild(botBlocks[botBlocks.length-1]);
}

// Checks if the block has yet to reach the left hand side.
function inScreen(block) {
  if (parseInt(block.style.left)+parseInt(block.style.width)>=0) {
    return true;
  }
  return false;
}

// returns an array of the top, left, height, width of a block.
function blockArea(block) {
  return [parseInt(block.style.top),parseInt(block.style.left),
    parseInt(block.style.height),parseInt(block.style.width)];
}
//checks true if there is a collision between a block and nyan cat.
function touchCat(block) {
  var blockArea = blockArea(block);
  var catTailtoHead = [parseInt(cat.style.top)+7,parseInt(cat.style.left),
    parseInt(cat.style.height)-12,parseInt(cat.style.width)];
  var catBody = [parseInt(cat.style.top),parseInt(cat.style.left)+10,
    parseInt(cat.style.height),parseInt(cat.style.width)-20];

  if (blockArea[0] > catTailtoHead[0] + catTailtoHead[2] &&
      blockArea[1] > catTailtoHead[1] + catTailtoHead[3] &&
      catTailtoHead[0] > blockArea[0] + blockArea[2] &&
      catTailtoHead[1] > blockArea[1] + blockArea[3] ||
      blockArea[0] > catBody[0] + catBody[2] &&
      blockArea[1] > catBody[1] + catBody[3] &&
      catBody[0] > blockArea[0] + blockArea[2] &&
      catBody[1] > blockArea[1] + blockArea[3]) {
    return true;
  }
  return false;
}

function catOut() {
  var nyan = catBody = [parseInt(cat.style.top),parseInt(cat.style.left),
    parseInt(cat.style.height),parseInt(cat.style.width)];
  if ()
}

//Moves everything and performs all the necessary checks
function move() {
  cat.style.top=(parseInt(cat.style.top)+vertSpeed)+"px"; // Nyan Cat makes its move.
  for (var i=0;i<topBlocks.length;i++) { /*could use botBlocks. Doesn't matter as they have same length
    Technically, I shouldn't be able loop through a queue, but in JS it's just an array treated in a special way */
    topBlocks[i].style.left=(parseInt(topBlocks[i].style.left)+blockSpeed)+"px";
    botBlocks[i].style.left=(parseInt(topBlocks[i].style.left)+blockSpeed)+"px";
    if (touchCat(blockArea(topBlocks[i]))||touchCat(blockArea(botBlocks[i]))) {
      main = null;
      running = false;
    }
  }
}
