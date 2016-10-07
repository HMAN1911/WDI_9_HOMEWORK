console.log('PT Ready');

var origin = document.getElementsByTagName("select")[0];
var destination = document.getElementsByTagName("select")[1];
var searchBtn = document.getElementsByClassName("find")[0];
var swapBtn = document.getElementsByClassName("swap")[0];

var startingLineOutput = document.getElementById("starting-line");
var endingLineOutput = document.getElementById("ending-line");
var stopsOutput = document.getElementById("stops");
var inputError = document.getElementsByTagName("p")[0];

searchBtn.addEventListener('click', displayJourney)
swapBtn.addEventListener('click', swap);

var alemein = {
  name: 'Alemein',
  stops: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorne']
}

var glenwav = {
  name: 'Glen Waverly',
  stops: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong']
}

var sandringham = {
  name: 'Sandringham',
  stops: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

var validStops = alemein.stops.concat(glenwav.stops, sandringham.stops);

function displayJourney() {
  stopsOutput.innerHTML = '';
  inputError.style.visibility = "hidden";

  if(invalidInput(origin.value, destination.value)) {
    inputError.style.visibility = "visible";
    return;
  }

  var journey = calculateJourney(origin.value, destination.value);
  startingLineOutput.innerHTML = journey.startingLine;
  endingLineOutput.innerHTML = journey.destinationLine;
  buildStops(journey);
}

function calculateJourney(origin, destination) {
  var originLine, destinationLine;
  var stopCount = 0;
  var result = {
    startingLine: '',
    destinationLine: 'Not Required',
    stops: [],
    changeOver: false
  };

  if (origin === "Richmond") {
    destinationLine = getLine(destination);
    originLine = destinationLine;
  }
  else {
    originLine = getLine(origin);
    destinationLine = getLine(destination);  
  }

  result.startingLine = originLine.name;

  if (originLine === destinationLine) {
    if (originLine.stops.indexOf(origin) !== -1 && originLine.stops.indexOf(destination) !== -1) {
      var originIndex = originLine.stops.indexOf(origin);
      var destinationIndex = originLine.stops.indexOf(destination);
      populateStops(originIndex, destinationIndex, originLine, result, 0);
    }
  }
  else {
    var indexOfRichmond = originLine.stops.indexOf('Richmond');
    var originIndex = originLine.stops.indexOf(origin);
    populateStops(originIndex, indexOfRichmond, originLine, result, 0);

    result.changeOver = true;
    result.destinationLine = destinationLine.name;
    indexOfRichmond = destinationLine.stops.indexOf('Richmond');
    var destinationIndex = destinationLine.stops.indexOf(destination);
    populateStops(indexOfRichmond, destinationIndex, destinationLine, result, 1);
  }
  return result;
}

function getLine(station) {
  if (alemein.stops.indexOf(station) !== -1) {
    return alemein;
  }
  else if (glenwav.stops.indexOf(station) !== -1 ) {
    return glenwav;
  }
  else {
    return sandringham;
  }
}

function populateStops(originIndex, destinationIndex, originLine, result, richmondModifier) {
  if (destinationIndex > originIndex) {
    for (var i = originIndex + richmondModifier; i <= destinationIndex; i++) {
      result.stops.push(originLine.stops[i]);
    }
  }
  else {
    for (var i = originIndex - richmondModifier; i >= destinationIndex; i--) {
      result.stops.push(originLine.stops[i]);
    }
  }
}

function buildStops(journey) {
  for (var i = 0; i < journey.stops.length; i++) {
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(journey.stops[i]));
    stopsOutput.appendChild(newItem);
  }
}

function swap() {
  var temp = origin.value;
  origin.value = destination.value;
  destination.value = temp;
}

function invalidInput(origin, destination) {
  if (validStops.indexOf(origin) === -1 ||
      validStops.indexOf(destination) === -1 ||
      origin === destination) {
    return true;
  }
  return false;
}
