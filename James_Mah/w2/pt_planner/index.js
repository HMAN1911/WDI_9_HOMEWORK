var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var trainLines = [alamein, glenWaverly, sandringham];
var trainLineNames = ['Alamein', 'Glen Waverly', 'Sandringham'];

var origin = 'Melbourne Central';
var destination = 'Richmond';

var originLine = 0;
var originStop = 0;
var destinationLine = 0;
var destinationStop = 0;
var richmondStop = [];

var originValid = false;
var destinationValid = false;

document.getElementById('journeybutton').addEventListener('click', run);
document.getElementById('origininput').value = 'Melbourne Central';
document.getElementById('destinationinput').value = 'Windsor';


function run() {
  while (document.getElementById('outputdisplay').getElementsByTagName('p').length > 0) {
    var display = document.getElementById('outputdisplay').getElementsByTagName('p');
    for (var i = 0; i < display.length; i++) {
      display[i].parentNode.removeChild(display[i]);
    }
  }
  while (document.getElementById('outputdisplay').getElementsByTagName('li').length > 0) {
    var display = document.getElementById('outputdisplay').getElementsByTagName('li');
    for (var i = 0; i < display.length; i++) {
      display[i].parentNode.removeChild(display[i]);
    }
  }

  origin = document.getElementById('origininput').value;
  origin = adjustCapitals(origin);
  originValid = checkStopName(origin);

  destination = document.getElementById('destinationinput').value;
  destination = adjustCapitals(destination);
  destinationValid = checkStopName(destination);
  if (originValid === false || destinationValid === false) {
    alert('ERROR: Stop name not valid!');
  }

  if (originValid === true && destinationValid === true) {
    // find richmond stops
    for (var i = 0; i < trainLines.length; i++){
      if (trainLines[i].indexOf(origin) !== -1) {
        originStop = trainLines[i].indexOf(origin);
        originLine = i;
      }
      if (trainLines[i].indexOf(destination) !== -1) {
        destinationStop = trainLines[i].indexOf(destination);
        destinationLine = i;
      }
      richmondStop[i] = trainLines[i].indexOf('Richmond');
    }

    // update line with richmond stop
    if (origin === 'Richmond') {
      originLine = destinationLine;
      originStop = trainLines[originLine].indexOf(origin);
    }
    else if (destination === 'Richmond') {
      destinationLine = originLine;
      destinationStop = trainLines[destinationLine].indexOf(destination);
    }

    console.log('origin: ' + origin + '\ndestination: ' + destination);

    // if same line, just print it out
    if (originLine === destinationLine) {
      var routeArray = checkForwardPrint(originStop, destinationStop, trainLines[originLine], 'display1');
      var stopsTotal = Math.abs(destinationStop - originStop) + ' stops total';
      console.log(stopsTotal);
      printLine(stopsTotal, 'display4');
    }
    // if different line, do the print twice
    else {
      var routeArray1 = checkForwardPrint(originStop, richmondStop[originLine], trainLines[originLine], 'display1');
      console.log('*** switch line at Richmond ***');
      printLine('*** switch line at Richmond ***', 'display2');
      var routeArray2 = checkForwardPrint(richmondStop[destinationLine], destinationStop, trainLines[destinationLine], 'display3');
      var stopsTotal = Math.abs(richmondStop[originLine] - originStop) + Math.abs(destinationStop - richmondStop[destinationLine]) + ' stops total';
      console.log(stopsTotal);
      printLine(stopsTotal, 'display4');
    }
  }

  window.scrollBy(0, 1000);
}

function checkStopName(stopInput) {
  for (var i = 0; i <trainLines.length; i++) {
    if (trainLines[i].indexOf(stopInput) !== -1) {
      return true;
    }
  }
  return false;
}

function checkForwardPrint(startInput, endInput, lineInput, displayNo) {
  if (startInput > endInput) {
    lineInput.reverse();
    startInput = lineInput.length - startInput - 1;
    endInput = lineInput.length - endInput - 1;
  }
  console.log(lineInput.slice(startInput, endInput+1).join(' -----> '));
  // printLine(lineInput.slice(startInput, endInput+1).join(' -----> '), displayNo);
  printBox(lineInput.slice(startInput, endInput+1), displayNo);
}

function adjustCapitals(inputString) {
  inputString = inputString.split(' ');
  for (var i = 0; i < inputString.length; i++) {
    inputString[i] = inputString[i].charAt(0).toUpperCase() + inputString[i].toLowerCase().slice(1);
  }
  return inputString.join(' ');
}

function printLine(inputString, displayNo) {
  var p = document.createElement("p");
  p.innerHTML = inputString;
  document.getElementById(displayNo).appendChild(p);
} 

function printBox(inputArray, displayNo) {
  for (var i = 0; i < inputArray.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = inputArray[i];
    document.getElementById(displayNo).appendChild(li);
    if (i < inputArray.length - 1) {
      var arrow = document.createElement("li");
      arrow.innerHTML = ">>>";
      arrow.className = "arrow";
      document.getElementById(displayNo).appendChild(arrow);
    }
  }
} 
