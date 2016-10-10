// lines is a array of objects containing name(string) and stations(array of strings)
var lines = [ { name: 'alamain',
                stations:['Flinders Street',
                          'Richmond',
                          'East Richmond',
                          'Burnley',
                          'Hawthorn',
                          'Glenferrie']},
              { name: 'glenWaverly',
                stations:['Flagstaff',
                          'Melbourne Central',
                          'Parliament',
                          'Richmond',
                          'Kooyong',
                          'Tooronga']},
               { name: 'sandringham',
                 stations:['Southern Cross',
                           'Richmond',
                           'South Yarra',
                           'Prahran',
                           'Windsor']}];

var rich = "Richmond";
var origin = "Richmond";
var destination = "Windsor";
var originData = { lineIndex: null,
                   name: null,
                   stationIndex: null,
                   connectionIndex: null };
var destinationData = { lineIndex: null,
                        name: null,
                        stationIndex: null,
                        connectionIndex: null};

//_________________Find the right Line for the selected station_______________
 function findLine(station,point) { // origin,originData      /     destination,destinationData
   for (var i = 0; i < lines.length; i++) { // loop on all lines
     var lineTest = lines[i];               //linesTest receives object line on index 'i'
     x = lineTest.stations.indexOf(station);//x =
     if (x >= 0) { // if 'x' is a valid index of origin, give values to originData
       point.lineIndex = i;
       point.name = lineTest.name;
       point.stationIndex = x;
       point.connectionIndex = lineTest.stations.indexOf(rich);
       break;
     }
   }
 }
 findLine(origin,originData);             //Find the lines of the stations selected
 findLine(destination,destinationData); //Find the lines of the stations selected
//-----------------------------------------------------------------------------

//                 FUNCTION that adds every (1) station at a time
function addResult(i , value , message , totalStops){ // for loop i - origin/destination - message to change or not
  journeyResult = document.getElementById('journeyResult');
  journeyStep = document.createElement('li');
  journeyStep.innerHTML = lines[value.lineIndex].stations[i] + message;
  journeyResult.appendChild(journeyStep);
  console.log(lines[value.lineIndex].stations[i] + '<i> (Change platform) </i>');
  return totalStops + 1;
}


//_____________________________________Main Function____________________________
    function printStations(value,value2){ // originData , destinationData
      journeyResult = document.getElementById('journeyResult');
      journeyResult.innerHTML = ''; // Remove any previous data from span journeyResult.
      var totalStops = 0;
      message = ['','<b><i><u>(Change platform)<u></b></i>'] // message if needs to change platform.
      
      // print value 1 (Origin Line)
      if (value.stationIndex > value.connectionIndex){// if index of origin > connection
        for (var i = value.stationIndex; i >= value.connectionIndex; i--) {

          if (i === value.connectionIndex) { // if it is time to change platform
            totalStops = addResult(i,value,message[1],totalStops);
          }else { // do not need to change platform
            totalStops = addResult(i,value,message[0],totalStops);
          }
        }
      }else{ // index of origin < connection
        for (var i = value.stationIndex; i <= value.connectionIndex; i++) {

          if (i === value.connectionIndex) { // if it is time to change platform
            totalStops = addResult(i,value,message[1],totalStops);
          }else { // do not need to change platform
            totalStops = addResult(i,value,message[0],totalStops);
          }
        }
      }

      // print value 2 (Destination Line)
      if (value2.connectionIndex < value2.stationIndex){ // if index of connection < destination
        for (var i = value2.connectionIndex + 1; i <= value2.stationIndex; i++) {
          if (i === value2.stationIndex) { // if it is the last station
            totalStops = addResult(i,value2,message[0],totalStops);
          }else { // not the last station
            totalStops = addResult(i,value2,message[0],totalStops);
          }
        }
      }else{ //index of connection > destination
        for (var i = value2.connectionIndex -1; i > value2.stationIndex; i--) {
          if (i === value2.stationIndex) { // if it is the last station
            totalStops = addResult(i,value2,message[0],totalStops);
          }else { // not the last station
            totalStops = addResult(i,value2,message[1],totalStops);
          }
        }
      }
      journeyResult = document.getElementById('journeyResult');
      journeyStep = document.createElement('li')
      journeyStep.innerHTML = 'Total Stops: ' + (totalStops - 1);
      journeyResult.appendChild(journeyStep);
      console.log('Total Stops: ' + (totalStops - 1)); // Total Stops from origin to dest.
    }

    //printStations(originData, destinationData); // Call Main Function


//______________________make the list of stations for selection_____
      function uniq(a) {  // Sort Items Alphabetically and Remove Duplication
          return a.sort().filter(function(item, pos, ary) {
              return !pos || item != ary[pos - 1];
          })
      }

      //___________Make list of stations in Destination for selection_________________
      function listDropbox() {
        var stationList = []
        for (var y = 0; y < lines.length; y++) {                // Each line
          for (var i = 0; i < lines[y].stations.length; i++) { // Each station
            stationList.push(lines[y].stations[i])            // store all of them in one variable
          }
        }
        stationList = uniq(stationList)
        for (var z = 0; z < stationList.length; z++) {
          var listStationOrig = document.getElementById('station-origin');        // get Dropbox ID
          var listStationDest = document.getElementById('station-destination');   // get Dropbox ID
          var createOption = document.createElement('option');  // Create tag OPTION
          var createOption2 = document.createElement('option'); // Create tag OPTION
          createOption.innerHTML = (stationList[z]);  // Must create two variables
          listStationOrig.appendChild(createOption);  // do not let use the same one
          createOption2.innerHTML = (stationList[z]); // to be appended in Dest and Orig .
          listStationDest.appendChild(createOption2); // dropboxes
        }

      }
      //inputStationOrig(0);
      listDropbox();

//_______________________________Take the values from the dropboxes____________

//______________________________BUTTONS________________________________________

  var origin = document.getElementById('station-origin').value;
  var destination = document.getElementById('station-destination').value;

  var btnFinder = document.getElementById('btnFinder');
      btnFinder.addEventListener('click', function(){
        document.getElementsByClassName('results')[0].style.backgroundColor = 'rgba(255,255,255,0.6)';
        var origin = document.getElementById('station-origin').value;
        var destination = document.getElementById('station-destination').value
        findLine(origin,originData);             //Find the lines of the stations selected
        findLine(destination,destinationData);
        printStations(originData,destinationData)});
