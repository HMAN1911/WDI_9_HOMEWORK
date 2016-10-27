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


// approach
// 1. create new variable
// 2. modify where needed
// 3. append


// Part 1

var makeMiddleEarth = function () {

  // create a section tag with an id of `middle-earth`
  var $section = $('<section>').attr('id', 'middle-earth');

  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land
  for (var i = 0; i < lands.length; i++) {
    var $article = $('<article>');
    $article.append('<h1>' + lands[i]);
    $section.append($article);
  };

  $('body').append($section);

};

makeMiddleEarth();

// Part 2

var makeHobbits = function () {

  // display an `unordered list` of hobbits in the shire
  var $ul = $('<ul>');

  // give each hobbit a class of `hobbit`
  for (var i = 0; i < hobbits.length; i++) {
    $ul.append('<li class="hobbits">' + hobbits[i] + '</li>');
  };

  $('article').first().append($ul);

};

makeHobbits();

// Part 3

var keepItSecretKeepItSafe = function () {

  // create a div with an id of `'the-ring'`
  // give the div a class of `'magic-imbued-jewelry'`
  var $newDiv = $('<div>').attr('id', 'the-ring')
                .addClass('magic-imbued-jewelry');

  // add the ring as a child of `Frodo`
  $("article:contains('Frodo')").append($newDiv);

};

keepItSecretKeepItSafe();

// Part 4

var makeBuddies = function () {

  // create an `aside` tag
  // attach an `unordered list` of the `'buddies'` in the aside
  var $newAside = $('<aside>');
  var $newBuddies = $('<ul>');
  $newAside.append($newBuddies);

  for (var i = 0; i < buddies.length; i++) {
    $newBuddies.append('<li class="buddies">' + buddies[i] + '</li>');
  }

  // insert your aside as a child element of `rivendell`
  $("article:contains('Rivendell')").append($newAside);

};

makeBuddies();

// Part 5

var beautifulStranger = function () {

  // change the `'Strider'` text to `'Aragorn'`
  $("li:contains('Strider')").text('Aragorn');

};

beautifulStranger();

// Part 6

var leaveTheShire = function () {

  // assemble the `hobbits` and move them to `rivendell`

  // confused about this question so i took the ul as well.
  var $hobbits = $('.hobbits').parent();

  $("article:contains('Rivendell')").append($hobbits);

};

leaveTheShire();

// Part 7

var forgeTheFellowShip = function () {
  // create a new div called `'the-fellowship'` within `rivendell`

  // works in console but doesn't show up - need to work out why
  var $fellowship = $('<div id="the-fellowship"></div>');
  $("article:contains('Rivendell')").append($fellowship);
  var $newParty = $('<ul>')
  $('#the-fellowship').append($newParty);


  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // var $hobbits = $('.hobbits')  // 4 hobbits
  // var $buddies = $('.buddies')  // 5 buddies


  // after each character is added make an alert that they // have joined your party

};

forgeTheFellowShip();

// Part 8

var theBalrog = function () {
  // change the `'Gandalf'` text to `'Gandalf the White'`

  // works in console but doesn't show up - need to work out why
  var $gandalf = $("li:contains('Gandalf')")
  $gandalf.text('Gandalf the White');

  // apply the following style to the element, make the // background 'white', add a grey border
  $gandalf.css({backgroundColor: '#fff', border: 'grey'});
};

theBalrog();

// Part 9

var hornOfGondor = function () {
  // pop up an alert that the horn of gondor has been blown
  alert('The Horn of Gondor has been blown');

  // Boromir's been killed by the Uruk-hai!
  alert('Boromir\'s been killed by the Uruk-hai!');

  // Remove `Boromir` from the Fellowship
  $("li:contains('Boromir')").remove();
};

hornOfGondor();

// Part 10

var itsDangerousToGoAlone = function (){
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
  var $mordor = $("article:contains('Mordor')");
  var $mountDoom = $('<div id="mount-doom"><ul></ul></div>');
  var $frodo = $("li:contains('Frodo')");
  var $sam = $("li:contains('Sam')");

  $mordor.append($mountDoom);
  $('#mount-doom ul').append($frodo, $sam)

};

itsDangerousToGoAlone();

// Part 11

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  var $mordor = $("article:contains('Mordor')");
  var $gollum = $('<div id="gollum"></div>');

  // Remove `the ring` from `Frodo` and give it to `Gollum`
  var $ring = $('#the-ring');

  // Move Gollum into Mount Doom
  var $mountDoom = $('#mount-doom');

  $mordor.append($gollum);
  $gollum.append($ring);
  $mountDoom.append($gollum);

};

weWantsIt();

// Part 12

var thereAndBackAgain = function () {
  // remove `Gollum` and `the Ring` from the document
  $('#gollum').remove();
  $('#the-ring').remove();

  // Move all the `hobbits` back to `the shire`
  var $shire = $("article:contains('Shire')");
  var $hobbits = $('.hobbits')
  $shire.append($hobbits);

};

thereAndBackAgain();
