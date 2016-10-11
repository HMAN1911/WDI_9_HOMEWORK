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

// --------$PLACES----------
var $theShire = $('<article><h1>The Shire</h1></acrticle>');
var $rivendell = $('<article><h1>Rivendell</h1></acrticle>');
var $mordor = $('<article><h1>Mordor</h1></acrticle>');

// --------$GROUPS----------
var $hobbitsList= $('<ul>');
var $theFellowship=$('<div>');

// --------$HOBBITS----------
var $frodo = $('<li>').text(hobbits[0]).addClass('hobbit');
var $sam = $('<li>').text(hobbits[1]).addClass('hobbit');
var $merry = $('<li>').text(hobbits[2]).addClass('hobbit');
var $pippin = $('<li>').text(hobbits[3]).addClass('hobbit');

// --------$BUDDIES----------
var $gandalf = $('<li>').text(buddies[0]);
var $legolas = $('<li>').text(buddies[1]);
var $gimli = $('<li>').text(buddies[2]);
var $strider = $('<li>').text(buddies[3]);
var $boromir = $('<li>').text(buddies[4]);

// --------$ROUGUES----------
var $theRing = $('<div id="the-ring"></div>').addClass('magic-imbued-jewelry');
var $mountDoom=$('<div id="mount-doom">');
var $gollum=$('<div id="gollum">');

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   var $middleEarth = $('<section>').attr('id', 'middle-earth');

   for (var i = 0; i < lands.length; i++) {
     var $article = $('<article>');
     var $h1 = $('h1').text(lands[i]);
     $article.append($h1);
     $middleEarth.append($article);
   }

   $(body).append($middleEarth);
};

makeMiddleEarth();


var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var $theShire = $('article')[0];
   var $ul = $('<ul>');

   for (var i = 0; i < hobbits.length; i++) {
     var $li = $('<li>').text(hobbits[i]).addClass('hobbit');
     $ul.append($li);
   }

   $theShire.append($ul);

};



// ---- PART 5 -----
var beautifulStranger = function () {

   // change the `'Strider'` text to `'Aragorn'`

   buddies[3] = 'Aragorn';
   console.log('beautifulStranger fired');
};
beautifulStranger();

// ---- PART 8 -----
var theBalrog = function () {

   // change the `'Gandalf'` text to `'Gandalf the White'`
   buddies[0] = 'Gandalf the White';

   // apply the following style to the element, make the
   // background 'white', add a grey border
  $gandalf.style
};
theBalrog();

// ---- PART 1 -----
var makeMiddleEarth = function () {

   // create a section tag with an id of `middle-earth`
  var $middleEarth = $("<section id='middle-earth'>");

     // add each land as an `article` tag
     // inside each `article` tag include an `h1` with the name of the land

     // append `middle-earth` to your document `body`

     $($middleEarth).append($theShire, $rivendell, $mordor);

    $(body).append($middleEarth);

  };
makeMiddleEarth();

// ---- PART 2 -----
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire

   $($hobbitsList).append($($frodo), $($sam), $($merry), $($pippin));

   $($theShire).append($hobbitsList);
   console.log('makeHobbits fired');


    // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};
makeHobbits();

// ---- PART 3 -----
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`


   // add the ring as a child of `Frodo`
   $($frodo).append($($theRing));
   console.log('keepItSecretKeepItSafe fired');
};
keepItSecretKeepItSafe();

// ---- PART 4 -----
var makeBuddies = function () {

   // create an `aside` tag

   var $asideTag = $('<aside>');
   var $buddiesList = $('<ul>');

   // attach an `unordered list` of the `'buddies'` in the aside

   $buddiesList.append($($gandalf), $($legolas),$($gimli),$($strider),$($boromir));

   $($asideTag).append($buddiesList);

   // insert your aside as a child element of `rivendell`

   $rivendell.append($asideTag);

   console.log('makeBuddies fired');

};
makeBuddies();

// ---- PART 6 -----
var leaveTheShire = function () {

   // assemble the `hobbits` and move them to `rivendell`
   $rivendell.append($hobbitsList);

   console.log('leaveTheShire fired');
};
leaveTheShire();

// ---- PART 7 -----
var forgeTheFellowShip = function () {

   // create a new div called `'the-fellowship'` within `rivendell`

  $rivendell.append($theFellowship);

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  $theFellowship.append($gandalf);
  $theFellowship.append($legolas);
  $theFellowship.append($gimli);
  $theFellowship.append($strider);
  $theFellowship.append($boromir);

  $theFellowship.append($frodo);
  $theFellowship.append($sam);
  $theFellowship.append($merry);
  $theFellowship.append($pippin);

  // after each character is added make an alert that they // have joined your party

  if ($theFellowship.length = 9) {
    alert('The buddies and Hobbits have joined the party')
  }
};
forgeTheFellowShip();

// ---- PART 9 -----
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   alert("Boromir's been killed by the Uruk-hai!");
   // Remove `Boromir` from the Fellowship
   $boromir.remove();
};
hornOfGondor();

// ---- PART 10 -----
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   $mordor.append($sam, $frodo);
   // add a div with an id of `'mount-doom'` to `Mordor`
   $mordor.append($mountDoom);
   console.log('itsDangerousToGoAlone fired');
};
itsDangerousToGoAlone();

// ---- PART 11 -----
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  $mordor.append($gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  $gollum.append($theRing);
  // Move Gollum into Mount Doom
  $mountDoom.append($gollum);
  console.log('weWantsIt fired');
};
weWantsIt();

// ---- PART 12 -----
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   $gollum.remove();
   $theRing.remove();
   // Move all the `hobbits` back to `the shire`
   $theShire.append($sam, $frodo, $merry, $pippin);
};
thereAndBackAgain();
