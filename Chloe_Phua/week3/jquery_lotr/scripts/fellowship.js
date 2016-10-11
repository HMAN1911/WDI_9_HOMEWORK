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

//part1
var makeMiddleEarth = function() {
  var $section = $('<div/>').attr('id','middle-earth');
  $.each(lands, function(index,value) {
    var $newLand = $('<article>')
    var $landName = $('<h1>');
    $landName.text(lands[index]);
    $landName.appendTo($newLand);
    $newLand.appendTo($section);

    });
  console.log($section);
  $section.appendTo(body);
}

makeMiddleEarth();

var $theShire = $('article:nth-child(1)');
var $Rivendell = $('article:nth-child(2)')
var $Mordor = $('article:nth-child(3)');
var $mtDoom = $('<div>').attr('id','mount-doom');
var $gollum = $('<div>').attr('id','gollum');




//part 2
var makeHobbits = function() {
  //create an unordered list, content of list are hobbits.
  var $unorderedList = $('<ul>');
  $.each(hobbits, function(index,value) {
    var $hobbitName = $('<li>').addClass('hobbit');
    $hobbitName.text(hobbits[index]);
    $hobbitName.appendTo($unorderedList);
  })
  //append to the second article
  $unorderedList.appendTo($theShire)
}
makeHobbits();

//part 3
var keepItSecretKeepItSafe = function() {
  var $ring = $('<div>').attr('id','the-ring').addClass('magic-imbued-jewelry');
  var $frodo = $('li').first();
  $ring.appendTo($frodo);
}

keepItSecretKeepItSafe()

//part 4
var makeBuddies = function() {
  var $aside =  $('<aside>')
  var $unorderedList = $('<ul>');
  $.each(buddies,function(index,value) {
    var $buddyGroup = $('<li>');
    $buddyGroup.text(buddies[index]);
    $buddyGroup.appendTo($unorderedList);
  })
  $unorderedList.appendTo($aside);
  $aside.appendTo($Rivendell);

}

makeBuddies();

//part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
  $("li:contains('Strider')").replaceWith($('<li>Aragorn</li>'))
}

beautifulStranger();

//part6
var leaveTheShire = function() {
  $Rivendell.append($('.hobbit'))
};

leaveTheShire();

//Part 7

var forgeTheFellowShip = function () {
  var $theFellowship = $('<div/>').attr('h1','the-fellowship');
  $theFellowship.appendTo($Rivendell);
  $.each($('li'), function(index,value) {
    $('li').appendTo($theFellowship);
    alert($('li') + "have joined the party!");
  });
}

forgeTheFellowShip();


// #### Part 8

var theBalrog = function () {
  $("li:contains('Gandalf the Grey')").replaceWith('<li>Gandalf the White</li>');
  $("li:contains('Gandalf the White')").css({'background-color': 'white', 'border': 'grey'});
};

theBalrog();

// Part 9
var hornOfGondor = function () {
  alert('THE HORN OF GONDOR HAS BEEN BLOWN. BOROMIR HAS BEEN KILLED BY THE URUK-HAI!');
  $("li:contains('Boromir')").remove();
};

hornOfGondor();

// #### Part 10

var itsDangerousToGoAlone = function (){
  $mtDoom.appendTo($Mordor);
  $("li:contains('Frodo Baggins')").appendTo($mtDoom);
  $("li:contains('Sam')").appendTo($mtDoom);
};

itsDangerousToGoAlone();

//
// #### Part 11

 var weWantsIt = function () {
   $gollum.appendTo($Mordor);
   $("#the-ring").appendTo($gollum);
   $gollum.appendTo($mtDoom);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
}
weWantsIt();
//

var thereAndBackAgain = function () {
  $("#gollum").remove();
  $theShire.append($('.hobbit'))
};

thereAndBackAgain();
