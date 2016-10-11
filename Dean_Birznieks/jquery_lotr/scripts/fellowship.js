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

// PART 1

var makeMiddleEarth = function() {
  var $newSection = $('<section id="middle-earth"></section>');
    $('body').append( $newSection );
  var $newArticle = $('<article></article>');
    $('section').append($newArticle);
  var $newHeading = $("<h1 id = 'theShire'>The Shire</h1>");
    $('article').append($newHeading);
  var $newHeading = $('<h1>Rivendell</h1>');
    $('article').append($newHeading);
  var $newHeading = $('<h1>Mordor</h1>');
    $('article').append($newHeading);
}
makeMiddleEarth();


// PART 2

var makeHobbits = function() {
  var $newUL = $('<ul></ul>');
      $('#theShire').append($newUL);
  var $newLI = $("<li class = 'hobbit'>Frodo Baggins</li>");
      $('ul').append($newLI);
  var $newLI = $("<li class = 'hobbit'>Samwise \'Sam\' Gamgee</li>");
      $('ul').append($newLI);
  var $newLI = $("<li class = 'hobbit'>Meriadoc \'Merry\' Brandybuck</li>");
      $('ul').append($newLI);
  var $newLI = $("<li class = 'hobbit'>Peregrin \'Pippin\' Took</li>");
      $('ul').append($newLI);
};
makeHobbits();


// PART 3

var keepItSecretKeepItSafe = function() {
  var $newRing = $("<div id = 'the-ring' class = 'magic-imbued-jewelry'></div>");
      $('.hobbit').first().append($newRing);
};
keepItSecretKeepItSafe();


// PART 4  (*** Only Partially Finished ***)

// var makeBuddies = function() {
//   var $newAside = $('<aside></aside>');
//       $('#middle-earth > article ').append($newAside);
//   var $newUL = $('<ul></ul>');
//       $('aside').append($newAside);
//   var $newLI = $('<li></li>')
// };
