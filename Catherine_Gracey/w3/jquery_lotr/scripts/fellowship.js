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

// Part 1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   var $middleEarth = $('<section id="middle-earth">');
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   for (var i = 0; i < lands.length; i++){
     var $landArticle = $('<article>');
     var $landHeading = $('<h1>').text(lands[i]);
     $landArticle.append($landHeading);
     $middleEarth.append($landArticle);
   }
   // append `middle-earth` to your document `body`
   $middleEarth.appendTo("body");
};

// Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   var $hobbits = $('<ul>');
   for (var i = 0; i < hobbits.length; i++){
     var $hobbit = $('<li>')
      .text(hobbits[i])
      .addClass('hobbit');
     $hobbits.append($hobbit);
   }
   $('article:nth-child(1)').append($hobbits);
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};

// Part 3
var keepItSecretKeepItSafe = function () {
  // create a div with an id of `'the-ring'`
  var $theRing = $('<div id="the-ring"></div>')
  // give the div a class of `'magic-imbued-jewelry'`
    .addClass('magic-imbued-jewelry')
  // add the ring as a child of `Frodo`
    .appendTo( $('.hobbit:nth-child(1)') );
};

// Part 4
var makeBuddies = function () {
   // create an `aside` tag
   var $aside = $('<aside>');
   // attach an `unordered list` of the `'buddies'` in the aside
   var $buddies = $('<ul>').appendTo($aside);
   for (var i = 0; i < buddies.length; i++){
     var $buddy = $('<li>').text(buddies[i]).appendTo($buddies);
   }
   // insert your aside as a child element of `rivendell`
   $aside.appendTo( $('article:nth-child(2)') );
};

// Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('aside li:nth-child(4)').text('Aragorn');
};

// Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('article:nth-child(1) ul')
    .remove()
    .appendTo( $('article:nth-child(2)') );
};

// Part 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var $fellowship = $('<div id="the-fellowship"></div>');

   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   var $members = $('article:nth-child(2) li');
   for (var i = 0; i < $members.length; i++){
     var $member = $members[i];
     $member.remove();
     $fellowship.append($member);
     //alert($member.textContent + " joined the fellowship");
   }
   $fellowship.appendTo( $('article:nth-child(2)') );
};

// Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   var $gandalf = $('#the-fellowship li:nth-child(1)');
   $gandalf.text('Gandalf the White');
   // apply the following style to the element, make the // background 'white', add a grey border
   $gandalf.css("background", "white");
   $gandalf.css("border-color", "grey");
   $gandalf.css("border-style", "solid");
   $gandalf.css("border-thickness", "2");
};

// Part 9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   //alert('The horn of Gondor has been blown');
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   var $fellowship = $('#the-fellowship li');
   $fellowship[4].remove();
};

// Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   var $hobbits = $('.hobbit');
   for (var i = 0; i < 2; i++){
     var $hobbit = $hobbits[i];
     $hobbit.remove();
     $('article:nth-child(3)').append($hobbit);
   }

   // add a div with an id of `'mount-doom'` to `Mordor`
   var $mtDoom = $('<div id="mount-doom"></div>').appendTo( $('article:nth-child(3)') );
};

// Part 11
var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   var $gollum = $('<div id="gollum"></div>');
   $('article:nth-child(3)').append($gollum);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   var $ring = $('#the-ring').remove().appendTo( $gollum );
   // Move Gollum into Mount Doom
   $gollum.remove().appendTo( $('#mount-doom') );
};

// Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   var $gollum = $('#gollum').remove();
   // Move all the `hobbits` back to `the shire`
   var $hobbits = $('.hobbit');
   for (var i = 0; i < $hobbits.length; i++){
     var $hobbit = $hobbits[i];
     $hobbit.remove();
     $("article:nth-child(1)").append($hobbit);
   };
};

//Function calls

makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
makeBuddies();
beautifulStranger();
leaveTheShire();
forgeTheFellowShip();
theBalrog();
hornOfGondor();
itsDangerousToGoAlone();
weWantsIt();
thereAndBackAgain();
