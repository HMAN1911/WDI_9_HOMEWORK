var Alamein = {
  stations: ['Flinders Street','Richmond', 'East Richmond','Burnley','Hawthorn','Glenferrie']
};
var GlenWarley = {
  stations : ['Flagstaff','Melbourne Central', 'Parliament','Richmond','Kooyong','Tooronga']
};
var Sandringham = {
  stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

var origin = prompt ('Where are you?');
var destination =prompt ('Where do you want to go?');

var originStation;
var destinationStation;

// start of the code
for (var i=0; i < Alamein.stations.length;i++){
var originStation = Alamein.stations.indexOf(origin);
var destinationStation = Alamein.stations.indexOf(destination);
}

if (Alamein.stations.indexOf(origin) === -1 || Alamein.stations.indexOf(destination)=== -1 ){
  console.log ('No station')
}


if (Alamein.stations.indexOf(origin) < Alamein.stations.indexOf(destination) ) {
  fastRoute=Alamein.stations.slice(originStation, destinationStation+1 );
} else {
  fastRoute =Alamein.stations.slice(destinationStation,originStation+1);
  fastRoute=fastRoute.reverse();
}
 console.log(fastRoute.join(' ---> ').toString());

 // Sandringham
 for (var i=0; i < Sandringham.stations.length;i++){
 var originStation = Sandringham.stations.indexOf(origin);
 var destinationStation = Sandringham.stations.indexOf(destination);
 }

 if (Sandringham.stations.indexOf(origin) === -1 || Sandringham.stations.indexOf(destination)=== -1 ){
   console.log ('No station')
 }


 if (Sandringham.stations.indexOf(origin) < Sandringham.stations.indexOf(destination) ) {
   fastRoute=Sandringham.stations.slice(originStation, destinationStation+1 );
 } else {
   fastRoute =Sandringham.stations.slice(destinationStation,originStation+1);
   fastRoute=fastRoute.reverse();
 }
  console.log(fastRoute.join(' ---> ').toString());

  //GlenWarley

  for (var i=0; i < GlenWarley.stations.length;i++){
  var originStation = GlenWarley.stations.indexOf(origin);
  var destinationStation = GlenWarley.stations.indexOf(destination);
  }

  if (GlenWarley.stations.indexOf(origin) === -1 || GlenWarley.stations.indexOf(destination)=== -1 ){
    console.log ('No station')
  }


  if (GlenWarley.stations.indexOf(origin) < GlenWarley.stations.indexOf(destination) ) {
    fastRoute=GlenWarley.stations.slice(originStation, destinationStation+1 );
  } else {
    fastRoute =GlenWarley.stations.slice(destinationStation,originStation+1);
    fastRoute=fastRoute.reverse();
  }
   console.log(fastRoute.join(' ---> ').toString());



  var changeStationAlamein = Alamein.stations.indexOf('Richmond');
  var changeStationSandringham = Sandringham.stations.indexOf('Richmond');
  var changeStationGlenWarley = GlenWarley.stations.indexOf('Richmond');


    // from Alamein to Sandringham
   for (var i=0; i < Alamein.stations.length;i++){
   var originStation = Alamein.stations.indexOf(origin);
   var destinationStation = Sandringham.stations.indexOf(destination);
   }

   if (Alamein.stations.indexOf(origin) === -1 || Alamein.stations.indexOf(destination)=== -1 ){
     console.log ('No station')


     fastRoute =Alamein.stations.slice(originStation,changeStationAlamein+1).push(Sandringham.stations.slice(changeStationSandringham+1,destination));
   }


    console.log(fastRoute.join(' ---> ').toString());
