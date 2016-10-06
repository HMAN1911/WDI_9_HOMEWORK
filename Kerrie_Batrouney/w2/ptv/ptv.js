
var alamein = ['Alamein', 'Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenwaverley = ['Glen Waverley', 'Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Sandringham', 'Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var trainLines = [alamein, glenwaverley, sandringham];

//on click run funtion routeCalc, then func printRoute2 or printRoute1
// document.getElementById("goBtn").addEventListener("click", routeCalc);

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }

//work out if origin and destination are on the same line, & which array they are in
//if on same line, work out direction of travel, print out route
var routeCalc = function () {
  //get origin and destination
  var origin = document.getElementById('origin').value;
  var destination = document.getElementById('destination').value;

for (var i = 0; i < trainLines.length; i++) {
  for (var j= 0; j < trainLines[i].length; j++) {
    if (trainLines[i][j]===origin) {
      var originLocIndex = j;
      var originLine = trainLines[i];
      // console.log('Origin line ' + originLine[0]);
      // console.log('stop number ' + j);
    } else if (trainLines[i][j] === destination) {
      var destLocIndex = j;
      var desLine = trainLines[i];
//       console.log('Destination line ' + trainLines[i][0]);
//       console.log('stop number ' + j);
}
}
}


/*
//checks if station is on network
if (originLocIndex === null) {
  console.log('Origin station is not on network');
}
*/
// sort this out later
//if (destLocIndex === null) {
//console.log('Destination station is not on network');
//}

//if on same line, work out direction of travel
if (originLine[0] === desLine[0]) {
  //same line, so check direction and stops

  if (originLocIndex>destLocIndex) {
//if direction to city, reverse array, list out stations, calculate number of stops
    var revRouteArray =  originLine.slice(destLocIndex,(originLocIndex+1));
    var routeArray = revRouteArray.reverse();

    printRoute1(routeArray);


} else if(originLocIndex<destLocIndex){
  //if direction from city, list out stations, calculate number of stops
    var routeArray =  originLine.slice(originLocIndex,(destLocIndex+1));
    printRoute1(routeArray);
} else if (originLocIndex=destLocIndex) {
    console.log("Same station, try again!");
}

}

else if (originLine[0] !== desLine[0]) {
  //different line, must change at Richmond, get the 2 legs
 if (originLocIndex < originLine.indexOf("Richmond")) {
    var leg1 = originLine.slice(originLocIndex, originLine.indexOf("Richmond")+1);
} else {
  var leg1 = originLine.slice(originLine.indexOf("Richmond"), originLocIndex +1);
}
if (leg1[0]=== "Richmond") {
  leg1.reverse();

}

  if (destLocIndex < desLine.indexOf("Richmond")){
    var leg2 = desLine.slice(destLocIndex, desLine.indexOf("Richmond")+1);
    if (leg2[0] !== "Richmond") {
      leg2 = leg2.reverse();
    }

} else {
    var leg2 = desLine.slice(desLine.indexOf("Richmond"), destLocIndex);
}
  //join the 2 bits
  var routeArray = leg1.concat(leg2);
  printRoute2(routeArray);

}
}

// if on different lines, flag to change at Richmond

// print a simple journey
function printRoute1(routeArray){
  // console.log('origin: ' + routeArray[0]);
  // console.log('destination: ' + routeArray[routeArray.length-1]);
  document.getElementById('route').value = routeArray.join('---->');
  console.log(routeArray.join(' ----> '));
  console.log('number of stops - ' + (routeArray.length-1));
  // document.getElementById('stops').value = routeArray.length-1;
  // console.log(document.getElementById('stops').value = routeArray.length-1);
  document.getElementById('stops').innerHTML = routeArray.length-1;
}


//print a complex journey
function printRoute2(routeArray) {
  console.log('origin: ' + routeArray[0]);
  console.log('destination: ' + routeArray[routeArray.length]);


  console.log('Change at Richmond');
  console.log(routeArray.join(' ----> '));
  console.log('number of stops - ' + (routeArray.length-1));
document.getElementById('route').value = routeArray.join('---->');
document.getElementById('stops').value = (route[routeArray.length]-1 + " Please change at Richmond")
}



//on click run func printRoute2 or printRoute1
window.onload = function() {
document.getElementById("goBtn").addEventListener("click", routeCalc);
}
// displayBtn.addEventListener("click", routeCalc);
// document.getElementById("myBtn").addEventListener("click", myFunction);
//
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }
