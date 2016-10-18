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
// var body = document.body;
var $body = $(document.body);

// Part 1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   var $newSection = $('<section>').attr('id','middle-earth');
   // add each land as an `article` tag
   for (var i = 0; i < lands.length; i++) {
     var $newLand = $('<article>');
     // inside each `article` tag include an `h1` with the name of the land
     $newLand.html('<h1>' + lands[i] + '</h1>');
     $newSection.append($newLand);
   }
   // append `middle-earth` to your document `body`
   $body.append($newSection);
};
makeMiddleEarth();


// Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var $hobbitsUL = $('<ul>');
   for (var i = 0; i < hobbits.length; i++) {
     var $newHobbit = $('<li>');
     $newHobbit.text(hobbits[i]);
     $newHobbit.addClass('hobbit');
     $hobbitsUL.append($newHobbit);
   }
   $('article:contains("The Shire")').append($hobbitsUL);
};
makeHobbits();


// Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   var ring = $('<div>').attr('id','the-ring');
   // give the div a class of `'magic-imbued-jewelry'`
   ring.addClass('magic-imbued-jewelry');
   // add the ring as a child of `Frodo`
   $('li:contains("Frodo Baggins")').append(ring);
};
keepItSecretKeepItSafe();


// Part 4
var makeBuddies = function () {
   // create an `aside` tag
   var $aside = $('<aside>');
   var $buddiesUL = $('<ul>');
   for (var i = 0; i < buddies.length; i++) {
     var $buddy = $('<li>').text(buddies[i]);
     $buddiesUL.append($buddy);
   }
  // attach an `unordered list` of the `'buddies'` in the aside
   $aside.append($buddiesUL);
   // insert your aside as a child element of `rivendell`
   $('article:contains("Rivendell")').append($aside);
};
makeBuddies();


// Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('li:contains("Strider")').text('Aragorn');
};
beautifulStranger();


// Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('article:contains("Rivendell") aside ul').append($('.hobbit'));
};
leaveTheShire();


// Part 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var $rivendell = $('article:contains("Rivendell")');
   $rivendell.append('<div id="the-fellowship"></div>');
   $('#the-fellowship').append('<ul>');
   $('li').each(function(index,element){
     $('#the-fellowship ul').append(element);
    //  console.log($(element).text());
     alert($(element).text() + ' has joined your party');
   })
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};
forgeTheFellowShip();

// Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   var $gandalfLI = $('li:contains("Gandalf")');
   $gandalfLI.text('Gandalf the White');
   $gandalfLI.css({'background':'white','border':'1px grey solid'})
   // apply the following style to the element, make the // background 'white', add a grey border
};
theBalrog();

// Part 9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert('horn of gondor has been blown');
   alert('Boromir has been killed by Uruk-hai');
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   $('li:contains("Boromir")').remove();
};
hornOfGondor();

// Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   $('article:contains("Mordor")').append('<div id="mount-doom">')
   $('#mount-doom').append('<ul>');
   $('#mount-doom ul').append($('li:contains("Frodo")'));
   $('#mount-doom ul').append($('li:contains("Sam")'))
};
itsDangerousToGoAlone();

// Part 11
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  var $gollum = $('<div>').attr('id','gollum');
  $('article:contains("Mordor")').append($gollum);
  $('#gollum').append($('#the-ring'));
  $('#mount-doom').append($gollum);
};
weWantsIt();

// Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum').remove();
   var $hobbits = $('.hobbit');
   $('article:contains("The Shire") ul').append($hobbits);
};
// thereAndBackAgain();
