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
  var $middleEarth = $('<section id="middle-earth">');
  for (var i = 0; i < lands.length; i++) {
    $middleEarth.append($('<article>').append($('<h1>').text(lands[i])));
  }
  $(body).append($middleEarth);
};

makeMiddleEarth();

var makeHobbits = function () {
  var $hobbits = $('<ul>');
  for (var i = 0; i < hobbits.length; i++) {
    $hobbits.append($('<li>')
      .addClass('hobbit')
      .text(hobbits[i]));
  }
  $hobbits.appendTo($('article:contains(The Shire)'));
};

makeHobbits();

var keepItSecretKeepItSafe = function () {
  $theRing = $('<div id="the-ring">').addClass('magic-imbued-jewelry');
  $theRing.appendTo($('.hobbit:contains(Frodo)'));
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
  $buddiesAside = $('<aside>').append($('<ul>'));
  $buddiesAside.appendTo($('article:contains(Rivendell)'));
  for (var i = 0; i < buddies.length; i++) {
    $('aside ul').append($('<li>').text(buddies[i]));
  }
};

makeBuddies();

var beautifulStranger = function () {
  $('li:contains(Strider)').text('Aragorn');
};

beautifulStranger();

var leaveTheShire = function () {
  $('article:contains(The Shire) ul').appendTo($('article:contains(Rivendell)'));
};

leaveTheShire();

var forgeTheFellowShip = function () {
  var $theFellowship = $('<div id="the-fellowship">');
  $('article:contains(Rivendell)').append($theFellowship);
  var $fellowshipMembers = $('li');
  for (var i = 0; i < $fellowshipMembers.length; i++) {
    $theFellowship.append($fellowshipMembers[i]);
    alert($fellowshipMembers[i].textContent + ' has joined the party.');
  }
};

forgeTheFellowShip();

var theBalrog = function () {
  $('li:contains(Gandalf)')
    .text('Gandalf the White')
    .css({'background': 'white', 'border': '1px solid grey'});
};

theBalrog();

var hornOfGondor = function () {
  alert('Boromir\'s been killed by the Uruk-hai!');
  $('li:contains(Boromir)').remove();
};

hornOfGondor();

var itsDangerousToGoAlone = function (){
  var $mordor = $('article:contains(Mordor)');
  $('.hobbit:contains(Frodo)').appendTo($mordor);
  $('.hobbit:contains(Sam)').appendTo($mordor);
  $mordor.append($('<div id="mount-doom">'));
};

itsDangerousToGoAlone();

var weWantsIt = function () {
  $('article:contains(Mordor)').append($('<div id="gollum">'));
  $('#the-ring').appendTo($('#gollum'));
  $('#gollum').appendTo($('#mount-doom'));
};

weWantsIt();

var thereAndBackAgain = function () {
  $('#gollum').remove();
  $('#the-ring').remove();
  $('.hobbit').appendTo($('article:contains(The Shire)'));
};

thereAndBackAgain();
