var alameinLine = {
  trainLine: "Alamein Line",
  stations: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
}

var glennyLine = {
  trainLine: "Glen Waverley Line",
  stations: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
}

var sandringhamLine = {
  trainLine: "Sandringham Line",
  stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

var pakenhamLine = {
  trainLine: "Pakenham Line",
  stations: ['Pakenham', 'Berwick', 'Narre Warren', 'Hallam']
}

var trainLines = [alameinLine, glennyLine, sandringhamLine, pakenhamLine];

var allStations = alameinLine.stations.concat(glennyLine.stations,sandringhamLine.stations,pakenhamLine.stations);
var filteredStations =  allStations.sort().filter(function(item, pos, ary) {
       return !pos || item != ary[pos - 1];
   })

//item - current item in array
//pos - index - position in array
//ary - actual array

var userOrigin = document.getElementById('list1');
var userDestination = document.getElementById('list2');
var userLine = document.getElementsByClassName('line')[0];
var originOutput = document.getElementsByClassName('origin')[0];
var destinationOutput = document.getElementsByClassName('destination')[0];
var yourPath = document.getElementsByClassName('stations')[0];
var numberStops = document.getElementsByClassName('num')[0];
var goBtn = document.getElementsByClassName('makeJourney')[0];

for (var i = 0; i < filteredStations.length; i++) {
  var x = document.getElementById("list1");
  var option = document.createElement("option");
  option.text = filteredStations[i];
  x.add(option, x[0]);
}

for (var i = 0; i < filteredStations.length; i++) {
  var x = document.getElementById("list2");
  var option = document.createElement("option");
  option.text = filteredStations[i];
  x.add(option, x[0]);
}

var yourJourney = function() {
  for (var i = 0; i < trainLines.length; i++) {
    for (var j = 0; j < trainLines[i].stations.length; j++) {
      var geoLocation = trainLines[i].stations;
      if (geoLocation.indexOf(userOrigin.value) !== -1 && geoLocation.indexOf(userDestination.value) !== -1) {
        var journeyPath = geoLocation.slice(geoLocation.indexOf(userOrigin.value),geoLocation.indexOf(userDestination.value) + 1);
        yourPath.textContent = journeyPath.join(' ---> ');
        originOutput.textContent = userOrigin.value;
        destinationOutput.textContent = userDestination.value;
        userLine.textContent = trainLines[i].trainLine;
        numberStops.value = journeyPath.length;
          break;
      }
    }
  }
  document.getElementsByClassName('journey')[0].style.visibility="visible";
}

if (yourPath.textContent) {
  console.log(" ");
} else {
  console.log("Train stations are not on the same line");
}

goBtn.addEventListener('click',yourJourney);
