console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   var $middleEarth = $('<section>').attr('id','middle-earth');
   // add each land as an `article` tag
   var $theShire = $('<article>');
   var $rivendell = $('<article>');
   var $mordor = $('<article>');
   // inside each `article` tag include an `h1` with the name of the land
   var $theShireName = $('<h1>').text('The Shire');
   var $rivendellName = $('<h1>').text('Rivendell');
   var $mordorName = $('<h1>').text('Mordor');
   $theShire.append($theShireName);
   $rivendell.append($rivendellName);
   $mordor.append($mordorName);

   $middleEarth.append($theShire);
   $middleEarth.append($rivendell);
   $middleEarth.append($mordor);

   // append `middle-earth` to your document `body`
   $('body').append($middleEarth);
};

makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var $theShire = $('article:nth-child(1)');
   for (var i = 0; i < hobbits.length; i++) {
     var $newLI = $('<li>').text(hobbits[i]);
     $newLI.addClass('hobbit');
     $theShire.append($newLI);
   }
};
makeHobbits();
var keepItSecretKeepItSafe = function () {
  $createDiv = $('<div>').attr('id','the-ring');
  $createDiv.addClass('magic-imbued-jewelry');
  $frodo = $('.hobbit').eq(0);
  $frodo.append($createDiv);
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   $createAside = $('<aside>');
   // attach an `unordered list` of the `'buddies'` in the aside
   for (var i = 0; i < buddies.length; i++) {
     var $newLI = $('<li>').text(buddies[i]);
     $createAside.append($newLI);
   }
   // insert your aside as a child element of `rivendell`
   $rivendell = $('article').eq(1);
   $rivendell.append($createAside);
};
makeBuddies();
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   var $strider = $('aside li').eq(3);
   $strider.text('Aragorn');
};

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $origin = $('article').eq(0);
   $destination = $('article').eq(1)
   $hobbits = $origin.find('li');
   $destination.append($hobbits);

};
leaveTheShire();
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var $theFellowship = $('<div>') ;
   $theFellowship.attr('id','the-fellowship');
   var $rivendell = $('article:nth-child(2)');
   var $hobbits = $rivendell.find('li');
   var $buddyPack = $rivendell.find('aside');
   var $buddy = $buddyPack.find('li')
   for (var i = 0; i < $hobbits.length; i++) {
     $theFellowship.append($hobbits[i]);
   }
   for (var i = 0; i < $buddy.length; i++) {
     $theFellowship.append($buddy[i]);
   }
   $rivendell.append($theFellowship);
   alert('Hobbits and Buddies have joined your party.');
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};
forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   $gandalf = $("li:contains('Gandalf the Grey')");
   $gandalf.text('Gandalf the White');
   // apply the following style to the element, make the // background 'white', add a grey border
   $gandalf.css({"background-color": "white", "border": "2px solid grey"});
};
theBalrog();
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert('The horn of gondor has been blown!')
   // Boromir's been killed by the Uruk-hai!
   alert("Boromir's been killed by the Uruk-hai!");
   // Remove `Boromir` from the Fellowship
   var $rivendell = $('article:nth-child(2)');
   var $boromir = $("li:contains('Boromir')" );
   $boromir.remove();
};
hornOfGondor();

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   var $mordor = $('article:nth-child(3)');
   var $frodo = $("li:contains('Frodo')");
   var $sam = $('li:contains("Sam")')
   $mordor.append($frodo,$sam);
   // add a div with an id of `'mount-doom'` to `Mordor`
};
itsDangerousToGoAlone();


 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   var $gollum = $('<div>').attr('id', 'gollum');
   var $mordor = $('article:nth-child(3)');
   $mordor.append($gollum)

   // Remove `the ring` from `Frodo` and give it to `Gollum`
   var $frodo = $('li:contains("Frodo")')
   var $theRing = $frodo.find('div');
   $gollum.append($theRing);

   // Move Gollum into Mount Doom
   var $mountDoom = $('#mount-doom');
   $mountDoom.append($gollum);
};
weWantsIt();


var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   var $gollum = $('#gollum');
   $gollum.remove();
   // Move all the `hobbits` back to `the shire`
   var $hobbits = $('.hobbit');
   var $theShire = $('article:nth-child(1)');
   $theShire.append($hobbits);
};
thereAndBackAgain();
