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
   var $middleEarth = $('<section>').attr('id', 'middle-earth');
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   for (var i = 0; i < lands.length; i++) {
     var $newLandArticle = $('<article>');
     $newLandArticle.append('<h1>' + lands[i] + '</h1>');
     $middleEarth.append($newLandArticle);
   }
   // append `middle-earth` to your document `body`
   $(body).append($middleEarth);
};

makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   $("h1:contains('The Shire')").parent().append("<ul>");
   $theShireList = $("h1:contains('The Shire')").parent().find("ul");

   for (var i = 0; i < hobbits.length; i++) {
     var $newHobit = $("<li>" + hobbits[i] + "</li>").addClass("hobbit");
     $theShireList.append($newHobit);
   }
};

makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $theRing = $("<div>").addClass("magic-imbued-jewelry");
   $frodo = $("li:contains('Frodo')");

   $frodo.append($theRing);

};

keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`

   var $buddiesAside = $("<aside>").append("<ul>");
   var $buddiesAsideList = $buddiesAside.find("ul");

   for (var i = 0; i < buddies.length; i++) {
     var $newBuddy = $("<li>"+buddies[i]+"</li>");
     $buddiesAsideList.append($newBuddy);
   }

   var $rivendell = $("article:contains('Rivendell')")
   $rivendell.append($buddiesAside);

};

makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $("li:contains('Strider')").text('Aragorn')
};

beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var $rivendell = $("article:contains('Rivendell')");
   $("article:contains('The Shire')").find("ul").detach().appendTo($rivendell);
};

leaveTheShire();

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   var $theFellowshipDiv = $("<div>").attr("id", "the-fellowship");
   $theFellowshipDiv.append("<ul>");
   $theFellowshipList = $theFellowshipDiv.find("ul");
   var $rivendell = $("article:contains('Rivendell')");
   $rivendell.append($theFellowshipDiv);

   var $buddiesAndHobbits = $rivendell.find("li");

   for (var i = 0; i < $buddiesAndHobbits.length; i++) {
     $($buddiesAndHobbits[i]).detach().appendTo($theFellowshipList);
     alert($($buddiesAndHobbits[i]).text() + " has joined your party");
   }
};

forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   var $gandalf = $("li:contains('Gandalf')")
   $gandalf.text("Gandalf the White");
   $gandalf.css({
     "background": "white",
     "border": "1px solid grey"
   });
};

theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert("Horn of Gondor has been Blown!");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   $("li:contains('Boromir')").remove();

};

hornOfGondor();

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   var $mordorArticle = $("article:contains('Mordor')");
   var $mountDoomDiv = $("<div>").attr("id", "mount-doom");
   $mountDoomDiv.append("<ul>");
   $mordorArticle.append($mountDoomDiv);

   var $moundDoomList = $mountDoomDiv.find("ul");

   $("li:contains('Frodo')").detach().appendTo($moundDoomList);
   $("li:contains('Sam')").detach().appendTo($moundDoomList);

};

itsDangerousToGoAlone();

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  var $gollumDiv = $("<div>").attr("id", "gollum");
  var $mordor = $("article:contains('Mordor')");
  $mordor.append($gollumDiv);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  var $frodo = $("li:contains('Frodo')");
  var $ring = $frodo.find("div");
  $ring.detach().appendTo($gollumDiv);
  // Move Gollum into Mount Doom
  $gollumDiv.detach().appendTo($("#mount-doom"));
};
weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $("#gollum").detach();
   $(".magic-imbued-jewelry").detach();
   var $theShire = $("h1:contains('The Shire')").parent();
   $("#mount-doom ul").detach().appendTo($theShire);

};

thereAndBackAgain();
