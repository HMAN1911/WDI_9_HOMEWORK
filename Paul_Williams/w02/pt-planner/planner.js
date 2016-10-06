// Define rail network as an array of objects.
var railNetwork = [
  {
    name: 'Alamein',
    stations: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
  },
  {
    name: 'Glen Waverly',
    stations: ['Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
  },
  {
    name: 'Sandringham',
    stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  },
  {
    name: 'Frankston',
    stations: ['Flagstaff', 'Richmond', 'Toorak', 'Malvern', 'Bentley', 'Cheltenham']
  }
];

// Store DOM objects
var originInput = document.getElementsByTagName('input')[0];
var destInput = document.getElementsByTagName('input')[1];
var planBtn = document.getElementsByClassName('btn')[0];
var outputDiv = document.getElementsByClassName('route')[0];

// Store origin and destination line names, and station index.
var originLine;
var originIndex;
var destLine;
var destIndex;

// Empty array to store final route.
var route = [];

planBtn.addEventListener('click', function () {
  // Find which line origin and destination stations are on, and their index.
  var origin = originInput.value;
  for (var i = 0; i < railNetwork.length; i++) {
    if (railNetwork[i].stations.indexOf(origin) !== -1) {
      originLine = railNetwork[i];
      originIndex = railNetwork[i].stations.indexOf(origin);
    }
  }
  var dest = destInput.value;
  for (var i = 0; i < railNetwork.length; i++) {
    if (railNetwork[i].stations.indexOf(dest) !== -1) {
      destLine = railNetwork[i];
      destIndex = railNetwork[i].stations.indexOf(dest);
    }
  }
  // Validate inputs.
  if (originLine === undefined) {
    originInput.value = ''
    originInput.placeholder = 'No such station'
  } else if (destLine === undefined) {
    destInput.value = '';
    destInput.placeholder = 'No such station'
  } else {
    findRoute();
    originInput.value = '';
    originInput.placeholder = 'Enter station';
    destInput.value = '';
    destInput.placeholder = 'Enter station';
  }
})

function findRoute() {
  var stopCount = 0;
  // Find route. Begin by checking if stations are on the same line.
  if (originLine === destLine) {
    // If so, check whether moving forwards or backwards through array.
    if (originIndex < destIndex) {
      // If forwards, add stations between origin and destination to array.
      route = originLine.stations.slice(originIndex, destIndex + 1);
    } else {
      // If backwards, add stations between destination and origin to array, then reverse order.
      route = originLine.stations.slice(destIndex, originIndex + 1);
      route.reverse();
    }
    stopCount = route.length - 1;
  } else {
    // If origin and destination on different lines, find index of changeover station (Richmond) on each line.
    var originChange = originLine.stations.indexOf('Richmond');
    var destChange = destLine.stations.indexOf('Richmond');
    // Check if first leg of journey is moving forwards or backwards through array.
    if (originIndex < originChange) {
      // If forwards, add stations between origin and changeover to array, and add note to change line. 
      route = originLine.stations.slice(originIndex, originChange + 1);
      route.push('•••Change to ' + destLine.name + ' line•••');
      // Then check whether second leg is forwards or backwards.
      if (destChange < destIndex) {
        // If forwards, add stations between changeover and destination to array.
        route = route.concat(destLine.stations.slice(destChange + 1, destIndex + 1));
      } else {
        // If backwards, add stations between destination and changeover to local array, then reverse order, then add to global array.
        var destRoute = destLine.stations.slice(destIndex, destChange);
        destRoute.reverse();
        route = route.concat(destRoute);
      }
    } else {
      // If first leg is backwards, add stations between changeover and origin to array, then reverse order, and add note to change line.
      route = originLine.stations.slice(originChange, originIndex + 1);
      route.reverse();
      route.push('•••Change to ' + destLine.name + ' line•••');
      // Check if second leg is forwards or backwards.
      if (destChange < destIndex) {
        // If forwards, add stations between changeover and destination to array.
        route = route.concat(destLine.stations.slice(destChange + 1, destIndex + 1));
      } else {
        // If backwards, add stations between destination and changeover to local array, then reverse order, then add to global array.
        var destRoute = destLine.stations.slice(destIndex, destChange);
        destRoute.reverse();
        route = route.concat(destRoute);
      }
    }
    stopCount = route.length - 2;
  }
  var routeString = '';
  for (var i = 0; i < route.length; i++) {
    routeString += route[i] + '<br>';
  }
  outputDiv.innerHTML = routeString + stopCount + ' stop(s) total.';
  originLine = undefined;
  destLine = undefined;
}
