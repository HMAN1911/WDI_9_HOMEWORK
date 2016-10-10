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
var makeMiddleEarth = function() {
  // create a section tag with an id of `middle-earth`
  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land
  // append `middle-earth` to your document `body`
  var $middleEarth = $('<section>')
    .attr('id', 'middle-earth');

  lands.forEach(function(land) {
    var $landElement = $('<article>')
      .append($('<h1>' + land + '</h1>'));
    $middleEarth.append($landElement);
  });
  $('body').append($middleEarth);
};

// Part 2
var makeHobbits = function () {
  // display an `unordered list` of hobbits in the shire
  // (which is the second article tag on the page)
  // give each hobbit a class of `hobbit`
  var $hobbitList = $('<ul>');
  var $theShire = $('article:contains("The Shire")');

  hobbits.forEach(function(hobbit) {
    var $hobbitListItem = $('<li>')
      .addClass('hobbit')
      .text(hobbit);
    $hobbitList.append($hobbitListItem);
  });
  $theShire.append($hobbitList);
};

// Part 3
var keepItSecretKeepItSafe = function () {
  // create a div with an id of `'the-ring'`
  // give the div a class of `'magic-imbued-jewelry'`
  // add the ring as a child of `Frodo`
  var $theRing = $('<div>')
    .attr('id', 'the-ring')
    .addClass('magic-imbued-jewelry');
  var $frodo = $('.hobbit:contains("Frodo")');
  $frodo.append($theRing);
};

// Part 4
var makeBuddies = function () {
  // create an `aside` tag
  // attach an `unordered list` of the `'buddies'` in the aside
  // insert your aside as a child element of `rivendell`
  var $aside = $('<aside>');
  var $buddyList = $('<ul>');
  var $rivendell = $('article:contains("Rivendell")');

  buddies.forEach(function(buddy) {
    var $buddyListItem = $('<li>')
      .addClass('buddy')
      .text(buddy);
    $buddyList.append($buddyListItem);
  });
  $aside.append($buddyList);
  $rivendell.append($aside);
};

// Part 5
var beautifulStranger = function () {
  // change the `'Strider'` text to `'Aragorn'`
  $('li:contains("Strider")').text('Aragorn');
};

// Part 6
var leaveTheShire = function () {
  // assemble the `hobbits` and move them to `rivendell`
  var $hobbits = $('.hobbit');
  var $rivendell = $('article:contains("Rivendell")');
  $rivendell.find('ul').append($hobbits);
};

// Part 7
var forgeTheFellowShip = function () {
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  var $theFellowship = $('<div>').attr('id', 'the-fellowship').append('<ul>');
  var $fellowshipList = $('<ul>');
  var $rivendell = $('article:contains("Rivendell")');
  var $fellowshipMembers = $('.hobbit').add('.buddy');

  $fellowshipMembers.each(function(index, member) {
    $fellowshipList.append(member);
    alert(member.textContent + ' has joined your party.');
  });

  $theFellowship.append($fellowshipList);
  $rivendell.append($theFellowship);
};

// Part 8
var theBalrog = function () {
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // apply the following style to the element, make the // background 'white', add a grey border
  var $gandalf = $('li:contains("Gandalf")')
    .text('Gandalf the White')
    .css('background', 'white')
    .css('border', '1px grey solid');
};

// Part 9
var hornOfGondor = function () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  alert('The Horn of Gondor has been blown');
  $('li:contains("Boromir")').remove();
};

// Part 10
var itsDangerousToGoAlone = function (){
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
  var $frodo = $('li:contains("Frodo")');
  var $sam = $('li:contains("Sam")');
  var $mordor = $('article:contains("Mordor")');
  var $mountDoom = $('<div>').attr('id', 'mount-doom');
  $mordor.append($frodo);
  $mordor.append($sam);
  $mordor.append($mountDoom);
};

// Part 11
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  var $gollum = $('<div>').attr('id', 'gollum');
  var $mordor = $('article:contains("Mordor")');
  $mordor.append($gollum);
  $gollum.append($('#the-ring'));
  $('#mount-doom').append($gollum);
};

// Part 12
var thereAndBackAgain = function () {
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
  var $theShire = $('article:contains("The Shire")');
  var $hobbits = $('.hobbit');
  $('#gollum').remove();
  $('#the-ring').remove();
  $theShire.find('ul').append($hobbits);
};

// Play LoTR sequence
var playLoTR = function() {
  var sequence = [
    makeMiddleEarth,
    makeHobbits,
    keepItSecretKeepItSafe,
    makeBuddies,
    beautifulStranger,
    leaveTheShire,
    forgeTheFellowShip,
    theBalrog,
    hornOfGondor,
    itsDangerousToGoAlone,
    weWantsIt,
    thereAndBackAgain
  ];

  for (var i = 0; i < sequence.length; i++) {
    (function(i) {
      setTimeout(function() {
        sequence[i]();
      }, i * 1500);
    })(i);
  }
}
