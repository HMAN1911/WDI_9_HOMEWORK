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
var $body = $('body');


var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   var $newSection = $('<section>').attr('id', 'middle-earth');

   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   $.each(lands, function(index, value) {
     var $newArticle = $('<article>');
     var $newH1 = $('<h1>');
     $newH1.text(lands[index]);
     $newArticle.append($newH1);
     $newSection.append($newArticle);
   });

   // append `middle-earth` to your document `body`
   $body.append($newSection);
};

makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire

   var $newUl = $('<ul>');
   var $articleShire = $('article:nth-child(1)');

   $.each(hobbits, function(index, value) {
     var $newLi = $('<li>').addClass('hobbit');
     $newLi.text(hobbits[index]);
     $newUl.append($newLi);
     $articleShire.append($newUl);
   });

};

makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   var $newDiv = $('<div>').attr('id', 'the-ring').addClass('magic-imbued-jewelry');

   // add the ring as a child of `Frodo`
   var $findFrodo = $('li').first();
   $findFrodo.append($newDiv);
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   var $aside = $('<aside>');
   var $articleRivendell = $('article:nth-child(2)');

   // attach an `unordered list` of the `'buddies'` in the aside
   var $newUl = $('<ul>');
   $.each(buddies, function(index, value) {
     var $newLi = $('<li>');
     $newLi.text(buddies[index]);
     $newUl.append($newLi);
     $articleRivendell.append($newUl);
   });
   // insert your aside as a child element of `rivendell`
};

makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   var changeStrider = $("li:contains('Strider')").text('Aragorn');
};

beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var $newUl = $('<ul>');
   var $articleRivendell = $('article:nth-child(2)');
   var $articleShire = $('article:nth-child(1) li');

   $.each(hobbits, function(index, value) {
     var $newLi = $('<li>').addClass('hobbit');
     $newLi.text(hobbits[index]);
     $newUl.append($newLi);
     $articleRivendell.append($newUl);
   });

   $.each(hobbits, function(index, value) {
     $articleShire.remove();
   });
};

leaveTheShire();

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var $newUl = $('<ul>');
   var $articleRivendell = $('article:nth-child(2)');
   var $newDiv = $('<div>').attr('id', 'the-fellowship');
   $articleRivendell.append($newDiv);
   var $theFellowship = $('#the-fellowship');
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   $.each(hobbits, function(index, value) {
     var $newLiHobbits = $('<li>');
     $newLiHobbits.text(hobbits[index]);
     alert(hobbits[index] + ' has joined the party!');
     $newUl.append($newLiHobbits);
     $newDiv.append($theFellowship);
   });

   $.each(buddies, function(index, value) {
     var $newLiBuddies = $('<li>');
     $newLiBuddies.text(buddies[index]);
     alert(buddies[index] + ' has joined the party!');
     $newUl.append($newLiBuddies);
     $newDiv.append($theFellowship);
   // after each character is added make an alert that they // have joined your party
 });
};

// forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   var $changeGandalf = $("li:contains('Gandalf')").text('Gandalf the White').addClass('gandalf');
   // apply the following style to the element, make the // background 'white', add a grey border
};

theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert("horn of gondor has been blown");
   // Boromir's been killed by the Uruk-hai!
   alert("Boromir's been killed by the Uruk-hai!");
   // Remove `Boromir` from the Fellowship
   var $boromir = $("li:contains('Boromir')").remove();
};

// hornOfGondor();

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   var $findMordor = $("article:contains('Mordor')");
   var $newUl = $('<ul>');
   var $newLiFrodo = $('<li>').text('Frodo').attr('id', 'the-ring').addClass('magic-imbued-jewelry');
   var $newLiSam = $('<li>').text('Sam');

   $newUl.append($newLiFrodo);
   $newUl.append($newLiSam);
   var $frodo = $("li:contains('Frodo')").remove();
   var $sam = $("li:contains('Sam')").remove();

   // add a div with an id of `'mount-doom'` to `Mordor`
   var $newDiv = $('<div>').attr('id', 'mount-doom');
   $findMordor.append($newDiv);
   $findMordor.append($newUl);
};

itsDangerousToGoAlone();

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  var $findMordor = $("article:contains('Mordor')");
  var $newDiv = $('<div>').attr('id', 'gollum', 'the-ring').addClass('magic-imbued-jewelry');
  $findMordor.append($newDiv);

  // Remove `the ring` from `Frodo` and give it to `Gollum`

  var $findFrodo = $("article li:contains('Frodo')").remove();
  var $newLiFrodo = $('<li>').text('Frodo');
  var $newUl = $('ul:contains("Sam")');
  $newUl.append($newLiFrodo);
  // Move Gollum into Mount Doom
};

weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document

   var $findMordor = $("article:contains('Mordor')");
   var $newUl = $('<ul>');
   var $frodo = $("li:contains('Frodo')").remove();
   var $sam = $("li:contains('Sam')").remove();
   var $gollum = $('#gollum').remove();

   // Move all the `hobbits` back to `the shire`

   var $newUl = $('<ul>');
   var $articleShire = $('article:nth-child(1)');

   $.each(hobbits, function(index, value) {
     var $newLi = $('<li>').addClass('hobbit');
     $newLi.text(hobbits[index]);
     $newUl.append($newLi);
     $articleShire.append($newUl);
   });

};

thereAndBackAgain();
