// Define rail network as an array of objects.
var railNetwork = [
  {
    name: 'Alamein',
    stations: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
  },
  {
    name: 'Glen Waverly',
    stations: ['Southern Cross', 'Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
  },
  {
    name: 'Sandringham',
    stations: ['Southern Cross', 'Flinders Street', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  },
  {
    name: 'Frankston',
    stations: ['Flinders Street', 'Richmond', 'Toorak', 'Malvern', 'Bentley', 'Cheltenham']
  },
  {
    name: 'Upfield',
    stations: ['Flinders Street', 'Southern Cross', 'North Melbourne', 'McCauley', 'Royal Park', 'Brunswick', 'Anstey', 'Coburg']
  },
  {
    name: 'Sunbury',
    stations: ['Flinders Street', 'Parliament', 'Melbourne Central', 'Flagstaff', 'North Melbourne', 'Footscray', 'Sunshine', 'St Albans']
  }
];

// Store DOM objects.
var selectOriginLine = document.getElementsByTagName('select')[0];
var selectOriginStation = document.getElementsByTagName('select')[1];
var selectDestLine = document.getElementsByTagName('select')[2];
var selectDestStation = document.getElementsByTagName('select')[3];
var planBtn = document.getElementsByTagName('button')[0];
var outputDiv = document.getElementsByClassName('output')[0];

// Populate 'select line' lists.
for (var i = 0; i < railNetwork.length; i++) {
  var line1 = document.createElement('option');
  var line2 = document.createElement('option');
  line1.innerHTML = railNetwork[i].name;
  line2.innerHTML = railNetwork[i].name;
  selectOriginLine.appendChild(line1);
  selectDestLine.appendChild(line2);
}

function getLine(name) {
  for (var i = 0; i < railNetwork.length; i++) {
    if (railNetwork[i].name === name) {
      return railNetwork[i];
    }
  }
}

function findChangeStation(line1, line2) {
  for (var i = line1.stations.length - 1; i >= 0; i--) {
    for (var j = line2.stations.length - 1; j >= 0; j--) {
      if (line1.stations[i] === line2.stations[j]) {
        return line1.stations[i];
      }
    }
  }
}

function createStopDivs(route) {
  for (var i = 0; i < route.length; i++) {
    var stop = document.createElement('div');
    stop.className = 'stop';
    stop.innerHTML = route[i];
    outputDiv.appendChild(stop);
  }
}

function createOriginDivs() {
  var originStationName = document.createElement('div');
  originStationName.className = 'origin-station';
  originStationName.innerHTML = 'From ' + selectOriginStation.value;
  outputDiv.appendChild(originStationName);
  var originLineName = document.createElement('div');
  originLineName.className = 'origin-line';
  originLineName.innerHTML = 'Take the ' + selectOriginLine.value + ' line';
  outputDiv.appendChild(originLineName);
}

function createArrivalDiv(name) {
  var arrival = document.createElement('div');
  arrival.className = 'dest-station';
  arrival.innerHTML = 'Arrive at ' + name;
  outputDiv.appendChild(arrival);
}

function createCountDiv(route) {
  var count = document.createElement('div');
  count.innerHTML = (route.length + 1) + ' Stop(s) total';
  outputDiv.appendChild(count);
}

function createChangeDiv(name) {
  var change = document.createElement('div');
  change.className = 'dest-line';
  change.innerHTML = 'Change to ' + name + ' line';
  outputDiv.appendChild(change);
}

function clearOutputDivs() {
  while (outputDiv.firstChild) {
    outputDiv.removeChild(outputDiv.firstChild);
  }
}

// Populate station lists when line is selected.
selectOriginLine.addEventListener("change", function () {
  var originLine = getLine(selectOriginLine.value);
  while (selectOriginStation.childNodes.length > 2) {
    selectOriginStation.removeChild(selectOriginStation.lastChild);
  }
  for (var i = 0; i < originLine.stations.length; i++) {
    var station = document.createElement('option');
    station.innerHTML = originLine.stations[i];
    selectOriginStation.appendChild(station);
  }
});

selectDestLine.addEventListener("change", function () {
  var destLine = getLine(selectDestLine.value);
  while (selectDestStation.childNodes.length > 2) {
    selectDestStation.removeChild(selectDestStation.lastChild);
  }
  for (var i = 0; i < destLine.stations.length; i++) {
    var station = document.createElement('option');
    station.innerHTML = destLine.stations[i];
    selectDestStation.appendChild(station);
  }
});

// Find and display route when button is pressed.
planBtn.addEventListener('click', function () {

  clearOutputDivs();
  createOriginDivs();

  var originLine = getLine(selectOriginLine.value);
  var originIndex = originLine.stations.indexOf(selectOriginStation.value);
  var destLine = getLine(selectDestLine.value);
  var destIndex = destLine.stations.indexOf(selectDestStation.value);

  // Find route for stations on same line.
  if (selectOriginLine.value === selectDestLine.value) {
    var route = [];
    if (originIndex < destIndex) {
      route = originLine.stations.slice(originIndex + 1, destIndex);
    } else {
      route = originLine.stations.slice(destIndex + 1, originIndex);
      route.reverse();
    }
    createStopDivs(route);
    createArrivalDiv(selectDestStation.value);
    createCountDiv(route);
  }
  // OR - Find route for stations on different lines.
  else {
    var route1 = [];
    var route2 = [];
    var changeStation = findChangeStation(originLine, destLine);
    var originChange = originLine.stations.indexOf(changeStation);
    var destChange = destLine.stations.indexOf(changeStation);
    if (originIndex < originChange) {
      route1 = originLine.stations.slice(originIndex + 1, originChange + 1);
      if (destChange < destIndex) {
        route2 = destLine.stations.slice(destChange + 1, destIndex);
      } else {
        route2 = destLine.stations.slice(destIndex + 1, destChange);
        route2.reverse();
      }
    } else {
      route1 = originLine.stations.slice(originChange, originIndex);
      route1.reverse();
      if (destChange < destIndex) {
        route2 = destLine.stations.slice(destChange + 1, destIndex);
      } else {
        route2 = destLine.stations.slice(destIndex + 1, destChange);
        route2.reverse();
      }
    }
    createStopDivs(route1);
    createChangeDiv(selectDestLine.value);
    createStopDivs(route2);
    createArrivalDiv(selectDestStation.value);
    createCountDiv(route1.concat(route2));
  }
  outputDiv.style.opacity = '1';
});
