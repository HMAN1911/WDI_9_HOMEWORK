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

while (originValid === false || destinationValid === false) {
  origin = prompt("Which station are you getting on?");
  origin = adjustCapitals(origin);
  originValid = checkStopName(origin);

  destination = prompt("Which station are you getting off?");
  destination = adjustCapitals(destination);
  destinationValid = checkStopName(destination);

  if (originValid === false || destinationValid === false) {
    alert('ERROR: Please input again!');
  }
}

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

if (origin === 'Richmond') {
  originLine = destinationLine;
  originStop = trainLines[originLine].indexOf(origin);
}
else if (destination === 'Richmond') {
  destinationLine = originLine;
  destinationStop = trainLines[destinationLine].indexOf(destination);
}

console.log('origin: ' + origin + '\ndestination: ' + destination);

if (originLine === destinationLine) {
  checkForwardPrint(originStop, destinationStop, trainLines[originLine]);
  console.log(Math.abs(destinationStop - originStop) + ' stops total');
}
else {
  checkForwardPrint(originStop, richmondStop[originLine], trainLines[originLine]);
  console.log('*** switch line ***');
  checkForwardPrint(richmondStop[destinationLine], destinationStop, trainLines[destinationLine]);
  console.log(Math.abs(richmondStop[originLine] - originStop) + Math.abs(destinationStop - richmondStop[destinationLine]) + ' stops total');
}


function checkStopName(stopInput) {
  for (var i = 0; i <trainLines.length; i++) {
    if (trainLines[i].indexOf(stopInput) !== -1) {
      return true;
    }
  }
  return false;
}

function checkForwardPrint(startInput, endInput, lineInput) {
  if (startInput > endInput) {
    lineInput.reverse();
    startInput = lineInput.length - startInput - 1;
    endInput = lineInput.length - endInput - 1;
  }
  console.log(lineInput.slice(startInput, endInput+1).join(' -----> '));
}

function adjustCapitals(inputString) {
  inputString = inputString.split(' ');
  for (var i = 0; i < inputString.length; i++) {
    inputString[i] = inputString[i].charAt(0).toUpperCase() + inputString[i].toLowerCase().slice(1);
  }
  return inputString.join(' ');
}