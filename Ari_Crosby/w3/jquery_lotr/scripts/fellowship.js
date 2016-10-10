console.log("Linked.");

// Dramatis Personae
var $hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var $buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var $lands = ['The Shire', 'Rivendell', 'Mordor'];
var $body = $('.overlay');
// part 1
  var makeMiddleEarth = function () {
     // create a section tag with an id of `middle-earth`
     var $middleEarth = $('<section>').attr('id', 'middle-earth'); //$('.special').attr('id', 'your-id-value');
        $body.append( $middleEarth );
       // add each land as an `article` tag
      for (var i = 0; i < $lands.length; i++) {
    //   $('<article><h1>' + $lands[i] + ' </h1></article>');
        $middleEarth.append( ($('<article><h1>' + $lands[i] + '</h1></article>')) );
      }
     // inside each `article` tag include an `h1` with the name of the land
     // append `middle-earth` to your document `body` $todoList.append( $newLI );

  };
  makeMiddleEarth();
//part 2
var makeHobbits = function () {
//  var $theShire = $('article')[0];
  var $ul = $('article').eq(0).append( $('<ul>') );
   // display an `unordered list` of hobbits in the shire
    for (var i = 0; i < $hobbits.length; i++) {
    //  $theShire.append
      $ul.append( ($('<li>' + $hobbits[i] + '</li>'))
    .addClass('hobbit') );
    }
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};
makeHobbits();
// Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   var $theRing = $('<div>').attr('id', 'magic-imbued-jewelry');
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $('.hobbit').eq(0).append($theRing);
};
keepItSecretKeepItSafe();
