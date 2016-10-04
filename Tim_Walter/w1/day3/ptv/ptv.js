
alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];


var origin = 'Flagstaff'
var destination = 'Windsor'

//find origin station
var boardStat = '';
var boardLine = '';
var boardA = alameinLine.indexOf(origin);
var boardG = glenWaverlyLine.indexOf(origin);
var boardS = sandringhamLine.indexOf(origin);
if (boardA > -1 ) {
  boardStat = alameinLine[boardA];
  boardLine = 'Alamein';
} else if (boardG > -1) {
    boardStat = glenWaverlyLine[boardG];
    boardLine = 'Glen Waverly';
} else if (boardS > -1) {
    boardStat = sandringhamLine[boardS];
    boardLine = 'Sandringham';
}

// find destination
var destStat = '';
var destLine = '';
var destA = alameinLine.indexOf(destination);
var destG = glenWaverlyLine.indexOf(destination);
var destS = sandringhamLine.indexOf(destination);
if (destA > -1 ) {
  destStat = alameinLine[destA];
  destLine = 'Alamein';
} else if (destG > -1) {
    destStat = glenWaverlyLine[destG];
    destLine = 'Glen Waverly';
} else if (destS > -1) {
    destStat = sandringhamLine[destS];
    destLine = 'Sandringham';
}

// Origin to Richmond STOPS
var orig2Rich = [];
if (boardLine === 'Alamein') {
  orig2Rich = alameinLine.slice(alameinLine.indexOf(origin),
                                alameinLine.indexOf('Richmond')+1)
} else if  (boardLine === 'Glen Waverly') {
    orig2Rich = glenWaverlyLine.slice(glenWaverlyLine.indexOf(origin),
                                  glenWaverlyLine.indexOf('Richmond')+1)
} else if (boardLine === 'Sandringham') {
    orig2Rich = sandringhamLine.slice(sandringhamLine.indexOf(origin),
                                sandringhamLine.indexOf('Richmond')+1)
}


// console.log('Origin to Richmond STOPS: ' + orig2Rich);


// Richmond to destination STOPS
var rich2Dest = [];
if (destLine === 'Alamein') {
  rich2Dest = alameinLine.slice(alameinLine.indexOf('Richmond'),
                                alameinLine.indexOf(destination)+1)
} else if  (destLine === 'Glen Waverly') {
    rich2Dest = glenWaverlyLine.slice(glenWaverlyLine.indexOf('Richmond'),
                                  glenWaverlyLine.indexOf(destination)+1)
} else if (destLine === 'Sandringham') {
    rich2Dest = sandringhamLine.slice(sandringhamLine.indexOf('Richmond'),
                                sandringhamLine.indexOf(destination)+1)
}
// console.log('Richmond to destination STOPS: ' + rich2Dest);


// Journey DETAILS
console.log('JOURNEY DETAILS:');
console.log('ORIGIN: ' + origin);
console.log('DESTINATION: ' + destination);
console.log('-------------');
console.log('STOPS:');
console.log('Join ' + boardLine + ' Line' + '\n' + '\n');

for (i=0; i<= orig2Rich.length-1; i++) {
  console.log(orig2Rich[i] + '\n');
         }


console.log('\n' + 'Change to ' + destLine + ' Line at ' + orig2Rich[orig2Rich.length-1] + '\n' + '\n');


for (i=0; i<= rich2Dest.length-1; i++) {
  console.log(rich2Dest[i]);
         }
// console.log('Alight ' + destLine + ' line at ' + destStat);
