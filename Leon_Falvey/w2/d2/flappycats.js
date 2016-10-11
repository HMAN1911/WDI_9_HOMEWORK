// Constants and variables. Because it is clearer if I put them at the top.
// I think.
var highScore = 0;
var currentScore = 0;

var gap = 150; // Gap between top block and bottm block
var accel = 0.075; //Current acceleration of Nyan Cat
var vertSpeed = 0.0; //vertical speed of Nyan Cat
var blockSpeed = -2; // Horizontal 'speed' of blocks

var minHeight = 50; // Minimum Height of blocks

var running = false; //loop that checks if there interval is running
var main = null; // id for the move function and holds the whole gae timer

var topBlocks = []; // Holds all the blocks at the top
var botBlocks = []; // Holds all the blocks at the bottom

var mspassed = 0;

function startJump() {
  if (running) {
    vertSpeed = -3.5;
    jumpSound.play();
} else {
    nyaNyaNya.play();
    nyaNyaNya.loop=true;
    running = true;
    currentScore=0;
    curt1.getElementsByTagName('h2')[0].textContent='Score: ' + currentScore;
    while (topBlocks.length>0) {
      scr.removeChild(topBlocks.shift());
      scr.removeChild(botBlocks.shift());
    }
    main = setInterval(move,10);
    cat.style.top = '130px';
    vertSpeed = 0;
  }
}

// The screen is immoral. There are one, two, three, one
// two! Two problems with it. I'm going convert this immoral screen!

// Makes the screen/display/canvas for the game.
var scr = document.createElement("div");
scr.style.backgroundColor='#111166';
scr.style.zIndex = 0;
scr.style.width = '650px';
scr.style.height = '400px';
scr.style.border = '2px solid black';
scr.style.margin = '0 auto';
scr.style.position = 'absolute';
scr.addEventListener('click',startJump); // makes nyan cat fly up;
document.getElementsByTagName('body')[0].addEventListener('keydown',function() {
    if(event.keyCode===32) {
      startJump();
    }
  });
document.body.appendChild(scr);

// A hack to hide new block items when they are created
// and creates that nice sliding in/out effect.
var curt1 = document.createElement("div");
curt1.style.backgroundColor = "white";
curt1.style.zIndex = 2;
curt1.style.left = '600px'
curt1.style.top = "-2px"
curt1.style.width = '150px';
curt1.style.height = '404px';
curt1.style.borderLeft = '2px solid black';
curt1.style.position = 'absolute';
scr.appendChild(curt1);

// Adds the current and high score elements.
curt1.appendChild(document.createElement('h2'));
curt1.getElementsByTagName('h2')[0].textContent='Score: ' + currentScore;
curt1.appendChild(document.createElement('h2'));
curt1.getElementsByTagName('h2')[1].textContent='High Score: ' + highScore;

var curt2 = document.createElement("div");
curt2.style.backgroundColor = "white";
curt2.style.zIndex = 2;
curt2.style.left = '-2px'
curt2.style.top = "-2px"
curt2.style.width = '52px';
curt2.style.height = '404px';
curt2.style.borderRight = '2px solid black';
curt2.style.position = 'absolute';
scr.appendChild(curt2);

// Behold the Nyan Cat! Have faith in Nyan Cat, gain Eternal Life!
// Creates Nyan Cat and does all the css stuff.
var cat = document.createElement("img");
cat.style.zIndex = 1;
cat.src="nyan-cat-500-300.gif";
cat.style.width = '50px';
cat.style.height = '30px';
cat.style.left = '200px';
cat.style.top = '130px';
cat.style.position = 'absolute';
scr.appendChild(cat);

// Jump sound. Enough said. Kinda reminds me of the jump
// sound from a Gameboy Advance game I used to play.
var jumpSound = document.createElement("audio");
jumpSound.src="Jump.wav";
scr.appendChild(jumpSound);

// Nyan! Let's all go pet Azu-nyan now b(=^‥^=)o Nya!
// Nyan Cat song. It's called Nyanyanyanyanyanyanya. Which makes sense. Try singing it.
var nyaNyaNya = document.createElement("audio");
nyaNyaNya.src="Nyan Cat.mp3";
nyaNyaNya.volume=0.5;
scr.appendChild(nyaNyaNya);


// creates a new top and bottom block which are then pushed
// into topBlocks and botBlocks respectively
function newBlocks() {
  var extraHeightTop = Math.floor(Math.random()*(200-minHeight));
  var extraHeightBot = 200 - minHeight - extraHeightTop;

  topBlocks.push(document.createElement("div"));
  topBlocks[topBlocks.length-1].passedCat = false;
  topBlocks[topBlocks.length-1].style.zIndex = 1;
  topBlocks[topBlocks.length-1].style.position = 'absolute';
  topBlocks[topBlocks.length-1].style.left="600px";
  topBlocks[topBlocks.length-1].style.top="0px";
  topBlocks[topBlocks.length-1].style.width="50px";
  topBlocks[topBlocks.length-1].style.backgroundImage="url('rainbow.png')";
  topBlocks[topBlocks.length-1].style.backgroundRepeat="repeat-7";
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
  if (parseInt(block.style.left)>=0) {
    return true;
  }
  return false;
}

// returns an array of the top, left, height, width of a block.
function blockArea(block) {
  return [parseInt(block.style.top),parseInt(block.style.left), parseInt(block.style.height),parseInt(block.style.width)];
}
//checks true if there is a collision between a block and nyan cat.
function touchCat(blockA) {
  var bArea = blockArea(blockA);
  var cArea = blockArea(cat);
  if (bArea[0]<cArea[0]+cArea[2] && bArea[1]<cArea[1]+cArea[3] && cArea[0]<bArea[0]+bArea[2] && cArea[1]<bArea[1]+bArea[3]) {
    return true;
  }
  return false;
}

// Checks if nyan cat hits the top or the bottom of the screen.
// If so returns true, else returns false
function catOut() {
  var nyan = [parseInt(cat.style.top),
    parseInt(cat.style.height)];
  if (nyan[0]<0||nyan[0]+nyan[1]>400) {
    return true;
  }
  return false;
}

// Moves everything and performs all the necessary checks. It's the main loop where
// everything gets done
function move() {
  // creates the blocks every 1 second.
  if (mspassed === 1000) {
    newBlocks();
    mspassed = 0
  } else {
    mspassed+=10;
  }
  vertSpeed+=accel;
  cat.style.top=(parseInt(cat.style.top)+vertSpeed)+"px"; // Nyan Cat makes its move.
  // if the cat touches the edges, tops everything
  if (catOut()) {
    clearInterval(main);
    running = false;
    nyaNyaNya.pause();
    nyaNyaNya.load();
  }
  for (var i=0;i<topBlocks.length;i++) { // could use botBlocks. Doesn't matter as they have same length
    topBlocks[i].style.left=(parseInt(topBlocks[i].style.left)+blockSpeed)+"px";
    botBlocks[i].style.left=(parseInt(topBlocks[i].style.left)+blockSpeed)+"px";

    if (touchCat(botBlocks[i])||touchCat(topBlocks[i])) {
      clearInterval(main);
      running = false;
      nyaNyaNya.pause();
      nyaNyaNya.load();
    }
  }
  //Checks if there is at least one block on screen otherwise the enclosed code will not work
  if (topBlocks.length>0) {
    // Checks if the first block passed Nyan Cat, and if so, updates the score
    if ((parseInt(topBlocks[0].style.left)+parseInt(topBlocks[0].style.width)<parseInt(cat.style.left)) && (topBlocks[0].passedCat===false)) {
      topBlocks[0].passedCat=true;
      currentScore++;
      curt1.getElementsByTagName('h2')[0].textContent='Score: ' + currentScore;
      if (currentScore>highScore) {
        highScore=currentScore;
        curt1.getElementsByTagName('h2')[1].textContent='High Score: ' + highScore;
      }
    }
    // the first block is outside the screen on the left hand side, then remove
    // it from the array and the parent element.
    if (!inScreen(topBlocks[0])) {
      // Note the shift(). We want the first block, not the last
      scr.removeChild(topBlocks.shift());
      scr.removeChild(botBlocks.shift());
    }
  }
}
