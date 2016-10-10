console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise',
  'Merry',
  'Pippin'
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
   var $section = $('<section id="middle-earth">');
   // add each land as an `article` tag

   for (i=0; i<lands.length; i++){
     var $article = $('<article>');
// inside each `article` tag include an `h1` with the name of the land
     var $land = $('<h1>'); // add h1
     //lands i into h1

    //  console.log( lands[i] )
    $land.text(lands[i]).appendTo($article);

   $article.appendTo($section);
 }
 // append `middle-earth` to your document `body`
 $section.appendTo(body);
};

makeMiddleEarth();


var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   var $ul = $('<ul class="hobbits">');
   for (i=0; i<hobbits.length; i++){
     var $li = $('<li>');
     $li.text(hobbits[i]).appendTo($ul);
      // (which is the second article tag on the page)
      var $article = $('article');
      $ul.appendTo($article[0]);
   // give each hobbit a class of `hobbit`
    $("li").addClass("hobbit");
 }
};

makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   var $div = $('<div id="the ring" class="magic-imbued-jewellery">');

   // add the ring as a child of `Frodo`
   var $li = $('li');
   $div.appendTo($li[0]);
// $( "<p>Test</p>" ).appendTo( ".inner" );
};

keepItSecretKeepItSafe();


var makeBuddies = function () {
   // create an `aside` tag
   var $aside = $('<aside>');
   // attach an `unordered list` of the `'buddies'` in the aside
   var $ul = $('<ul class="buddies">');

   for (i=0; i<buddies.length; i++){
     var $li = $('<li>');
     $li.text(buddies[i]).appendTo(".buddies");
   }
     // insert your aside as a child element of `rivendell`
      var $aside = $('aside');
      var $article = $('article[1]');
      $(".buddies").appendTo($aside);
      $aside.appendTo($article);
  };
makeBuddies();


//
// ulStranger = function () {
//    // change the `'Strider'` text to `'Aragorn'`
//    var $ul = $('.buddies');
//    var $li = $('li');
//    for (i=0; i<buddies.length; i++){
//     if ($li.text(buddies[i])==="Strider") {
//        $li.text(buddies[i]) = 'Aragorn';
//      }
//    }
// };

//ulStranger ();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
var $hobbits = $('.hobbits');
var $buddies = $('.buddies');
var $aside = $('aside');
  $hobbits.appendTo($aside);
  $( "div" ).remove( ".hello" );

};

leaveTheShire();

// var forgeTheFellowShip = function () {
//    // create a new div called `'the-fellowship'` within `rivendell`
//    // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
//    // after each character is added make an alert that they // have joined your party
// };
// ```
//
// #### Part 8
//
// ```js
// var theBalrog = function () {
//    // change the `'Gandalf'` text to `'Gandalf the White'`
//    // apply the following style to the element, make the // background 'white', add a grey border
// };
// ```
//
// #### Part 9
// ```js
// var hornOfGondor = function () {
//    // pop up an alert that the horn of gondor has been blown
//    // Boromir's been killed by the Uruk-hai!
//    // Remove `Boromir` from the Fellowship
// };
// ```
//
// #### Part 10
// ```js
// var itsDangerousToGoAlone = function (){
//    // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
//    // add a div with an id of `'mount-doom'` to `Mordor`
// };
// ```
//
// #### Part 11
// ```js
//  var weWantsIt = function () {
//    // Create a div with an id of `'gollum'` and add it to Mordor
//    // Remove `the ring` from `Frodo` and give it to `Gollum`
//    // Move Gollum into Mount Doom
// };
// ```
//
// #### Part 12
// ```js
// var thereAndBackAgain = function () {
//    // remove `Gollum` and `the Ring` from the document
//    // Move all the `hobbits` back to `the shire`
// };
// ```
