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
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   var $section = $("<section>").attr('id', 'middle-earth');
   // add each land as an `article` tag
   for (var i = 0; i < lands.length; i++){
    console.log(lands[i]);
    var $article = $("<article>").text(lands[i]);
    // inside each `article` tag include an `h1` with the name of the land
    $article.append($("<h1>").text(lands[i]));
    $section.append($article);
   }

   // append `middle-earth` to your document `body`
   $("body").append($section);
};

makeMiddleEarth();


// Part 2
// find or create / modify where req'd / append
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var $ul = $("<ul>"); //create and empty ul
   var $theShire = $("article").eq(0);  // use EQ instead on [] notation
   for (var i=0; i<hobbits.length; i++) {
     var $li = $("<li>").text(hobbits[i]).addClass("hobbit");
     $ul.append($li);
   }

   $theShire.append($ul);

};

makeHobbits();


//  Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`

   var $theRing = $("<div>").attr('id', 'the-ring') // create the div in mem
                        .addClass('magic-imbued-jewelry');

   //ffind the li item with Frodo. Use eq to return a Jquery object [] returns no [] and therefore is not a jquery object
   var $frodo = $('.hobbit').eq(0);
   $frodo.append($theRing);

};
keepItSecretKeepItSafe();



// Part 4

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var $aside = $("<aside>");
   var $ul = $("<ul>");
   var $rivendell = $('article').eq(1);
   for (var i=0; i<buddies.length; i++) {
     var $li = $("<li>").text(buddies[i]);
     $ul.append($li);
   }
   $aside.append($ul);
   $rivendell.append($aside);
};

makeBuddies();

// Part 5

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   var $aragorn = $('li', 'buddies').eq(0);
};
beautifulStranger();
