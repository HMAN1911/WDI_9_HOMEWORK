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
  var $section = $("<section>").attr('id', 'middle-earth');
  $("#middle-earth").append($section);
  // section.attr("id", "middle-earth");

  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land
  // $section.append( $('<article>').append( $('<h1>').text(lands[0]) ));
  // $section.append( $('<article>').append( $('<h1>').text(lands[1]) ));
  // $section.append( $('<article>').append( $('<h1>').text(lands[2]) ));
  // Made it more DRY with using loop
  for (var i = 0; i < lands.length; i++) {
    $section.append( $('<article>').append( $('<h1>').text(lands[i]) ));
  }
  // append `middle-earth` to your document`body`
  $(document.body).append($section);
};

makeMiddleEarth();

// Part 2
var makeHobbits = function () {
  // display an `unordered list` of hobbits in the Shire
    // (which is the second article tag on the page)
    var $hobbitList = $('<ul>');
    // give each hobbit a class of `hobbit`
    for (var i = 0; i < hobbits.length; i++) {
      var $newHobbit = $('<li>').text(hobbits[i]).addClass('hobbit');
      $hobbitList.append($newHobbit);
    }
    var $shire = $('article:contains("The Shire")');
    $shire.append('$hobbitList');
};

// Part 3
var keepItSecretKeepItSafe = function() {
  // create a div with an id of `'the-ring'`
  var $theRing = $('<div>').attr('id', 'the-ring');
  // give the div a class of `'magic-imbued-jewelry'`
  $theRing.addClass('magic-imbued-jewelry');
  // add the ring as a child of `Frodo`
  var $frodo = $('.hobbit:contains("Frodo")');
  $frodo.append($theRing);
};

// Part 4
var makeBuddies = function() {
  // create an `aside` tag
  var $aside = $('<aside>');
  var $buddies = $('<ul>');
  $aside.append($buddies);
// attach an `unordered list` of the `'buddies'` in the aside
  buddies.forEach(function(buddy) {
    var $buddyList = $('<li>').addClass('buddy').text(buddy);
    $buddies.append($buddyList);
  });
  // insert your aside as a child element of `rivendell`
  var $rivendell = $('article:contains("Rivendell")');
  $aside.append($buddies);
  $rivendell.append($aside);
};

// Part 5
var beatifulStranger = function() {
  // change the `'Strider'` text to `'Aragorn'`
  $('li:contains("Strider")').text('Aragorn');
};

// Part 6
var leaveTheShire = function() {
  // assemble the `hobbits` and move them to `rivendell`
  var $hobbits = $('.hobbit');
  var $rivendell = $('article:contains("Rivendell")');
  $rivendell.find('ul').append($hobbits);
};

// Part 7
var forgeTheFellowShip = function() {
  // create a new div called `'the-fellowship'` within `rivendell`
  var $theFellowship = $('<div>').attr('id', 'the-fellowship').append('ul');
  var $rivendell = $('article:contains("Rivendell")');
  var $fellowshipList = $('<ul>');
  var $fellowshipChar = $('.hobbit').add('.buddy');

  $fellowshipChar.each(function(index, char) {
    $fellowshipList.append(char);
    alert(char.textContent + ' has joined your party');
  });
  $theFellowship.append($fellowshipList);
  $rivendell.append($theFellowship);
};

// Part 8
var theBalrog = function() {
  // change the `'Gandalf'` text to `'Gandalf the White'`
  $('li:contains("Gandalf the Grey")').text('Gandalf the White');
  // apply the following style to the element, make the // background 'white', add a grey border
  $('li:contains("Gandalf the White")').css('background', 'white').css('border', '1px solid grey');
};

// Part 9
var hornOfGondor = function() {
  alert("Boromir's been killed by the Uruk-hai!");
  $('li:contains("Boromir")').remove();
};

// Part 10
var itsDangerousToGoAlone = function() {
  var $frodo = $('li:contains("Frodo")');
  var $sam = $('li:contains("Sam")');
  var $mordor = $('li:contains("Mordor")');
  var $mountDoom = $('<div>').attr('id', 'mount-doom');
  $mordor.append($frodo);
  $mordor.append($sam);
};

// Part 11
var weWantsIt = function() {
  var $gollum = $('<div>').attr('id', 'gollum');
  var $mordor = $('li:contains("Mordor")');
  $mordor.append($gollum);
  $gollum.append($('#the-ring'));
  $mountDoom.append($('#gollum'));
};

// Part 12
var thereAndBackAgain = function() {
  $('div:contains("Gollum")').remove();
  $('div:contains("the-ring")').remove();
  var $theShire = $('article:contains("The Shire")');
  var $hobbits = $('.hobbit');
  $theShire.find('ul').append($hobbits);
};
