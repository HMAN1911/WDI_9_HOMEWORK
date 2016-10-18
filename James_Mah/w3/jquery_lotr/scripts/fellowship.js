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
var $body = $(body);


var makeMiddleEarth = function () {
  // create a section tag with an id of `middle-earth`
  var $newSection = $('<section>').attr( "id", "middle-earth" );
  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land
  $.each(lands, function(i, land) {
    var $newH1 = $('<h1>').text(land);
    var $newArticle = $('<article>').append( $newH1 );
    $newSection.append( $newArticle );
  });
  // append `middle-earth` to your document `body`
  $body.append( $newSection );
};

makeMiddleEarth();


var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
  var $newUl = $('<ul>');
  $.each(hobbits, function(i, hobbit) {
    var $newLi = $('<li>').addClass('hobbit').text(hobbit);
    $newUl.append( $newLi );
  });
  $('article:eq(0)').append( $newUl );
};

makeHobbits();


var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
  var $newDiv = $('<div>').attr( 'id', 'the-ring' ).addClass('magic-imbued-jewelry');
  $('li:contains(\'Frodo Baggins\')').append( $newDiv );
};

keepItSecretKeepItSafe();


var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
  var $newAside = $('<aside>');
  var $newUl = $('<ul>');
  $.each(buddies, function(i, buddy) {
    var $newLi = $('<li>').addClass('buddy').text(buddy);
    $newUl.append( $newLi );
  });
  $newAside.append( $newUl );
  $('article:contains(\'Rivendell\')').append( $newAside );
};

makeBuddies();


var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
  $('li:contains(\'Strider\')').text('Aragorn');
};

beautifulStranger();


var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
  $('aside > ul').append($('li.hobbit'));
};

leaveTheShire();


var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
  var $newDiv = $('<div>').attr('id', 'the-fellowship');

  $('li').each(function() {
    $newDiv.append( $(this) );
    console.log($(this).text() + " has joined your party!");
  });

  $('article:contains(\'Rivendell\')').append( $newDiv );
};

forgeTheFellowShip();


var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
  var $gandalf = $('li:contains(\'Gandalf\')');
  $gandalf.text('Gandalf the White')
          .css( 'background-color', 'white' )
          .css( 'border', 'solid grey' );
};

theBalrog();



var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   $('li:contains(\'Boromir\')').remove();
};

hornOfGondor();


var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   var $newUl = $('<ul>');
   var $newDiv = $('<div>').attr('id', 'mount-doom').append($newUl);
   $newUl.append( $('li:contains(\'Frodo\')') );
   $newUl.append( $('li:contains(\'Sam\')') );
   $('article:contains(\'Mordor\')').append($newDiv);
};

itsDangerousToGoAlone();


var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   var $newDiv = $('<div>').attr('id', 'gollum');
   $('article:contains(\'Mordor\')').append($newDiv);
   $newDiv.append($('#the-ring'));
   $('#mount-doom').append($newDiv);
};

weWantsIt();


var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum').remove();
   $('#the-ring').remove();
   $('article:contains(\'The Shire\') > ul').append($('.hobbit'));
};

thereAndBackAgain();

