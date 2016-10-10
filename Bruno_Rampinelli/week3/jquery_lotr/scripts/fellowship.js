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
// create a section tag with an id of `middle-earth`
var $middleEarth = $("<section>");
for (var i=0; i<lands.length; i++){
var $land = $('<article>');
var $landName = $('<h1>');
$landName.text(lands[i]);
$land.append($landName);
$middleEarth.append($land);
}

$('body').append($middleEarth);
};

   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
makeMiddleEarth();

  var theShire = $('article').eq(0);
  var rivendell = $('article').eq(1);
  var mordor = $('article').eq(2);

var makeHobbits = function () {

  var $hobbitsName = $("<ul>");
  for (var i=0; i < hobbits.length; i++) {
    var $hobbit = $("<li>").addClass('hobbit');
    $hobbit.text(hobbits[i]);
    $hobbitsName.append($hobbit);
  }
  theShire.append($hobbitsName);
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};

makeHobbits();

var frodo = $('li').eq(0);
var keepItSecretKeepItSafe = function () {

  var $theRing = $('<div>').attr('id','the-ring').
  addClass('magic-imbued-jewelry');
  frodo.append($theRing);

};
keepItSecretKeepItSafe();

// create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`

var makeBuddies = function () {
  var $aside = $('<aside>');
  var $buddiesName =$('<ul>');
  for (i=0; i<buddies.length;i++){
    var $buddy = $('<li>');
    $buddy.text(buddies[i]);
    $buddiesName.append($buddy);
  }
  $aside.append($buddiesName);
  rivendell.append($aside);

};
makeBuddies();

// create an `aside` tag
// attach an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`
var $strider=rivendell.find('li').eq(3)

var beautifulStranger = function () {

  $strider.text('Aragon');
};

beautifulStranger();
// change the `'Strider'` text to `'Aragorn'`

var $hobbits = theShire.find('ul').eq(0);

var leaveTheShire = function () {

  rivendell.append($hobbits);

};

leaveTheShire();

// assemble the `hobbits` and move them to `rivendell`

var $totalFellows= rivendell.find('li');
var forgeTheFellowShip = function () {
  var $theFelloswhip = $('<div>').attr('id', 'the-fellowship');
  for (var i=0; i<$totalFellows.length; i++) {
    $theFelloswhip.append($totalFellows.eq(i));
    alert ($totalFellows.eq(i).text() + 'have joined your party');

  }

  rivendell.append($theFelloswhip);
};
forgeTheFellowShip();
// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party

var $gandalf =$totalFellows.eq(0);
var theBalrog = function () {
  $gandalf.text('Gandald the White');
  $gandalf.css('backgroundColor', 'white');
  $gandalf.css('border', '2px dotted grey');
 };
 // change the `'Gandalf'` text to `'Gandalf the White'`
 // apply the following style to the element, make the // background 'white', add a grey border
 theBalrog();

var $bormir = $totalFellows.eq(4);
 var hornOfGondor = function () {
   alert('the horn of gondor has been blown')
   alert ($bormir + 'has been killed by the Uruk-hai!');
   $bormir.remove();

 };

 // pop up an alert that the horn of gondor has been blown
 // Boromir's been killed by the Uruk-hai!
 // Remove `Boromir` from the Fellowship
 hornOfGondor();

var $sam = $totalFellows.eq(6);

var itsDangerousToGoAlone = function (){
  mordor.append(frodo);
  mordor.append($sam);
  var $mountDoom = $('<div>').attr('id','mount-doom');
  mordor.append($mountDoom);

};

itsDangerousToGoAlone();

// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
// add a div with an id of `'mount-doom'` to `Mordor`
