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
var $body = $(document.body);

//////PART 1

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
    $body.append($section);
};


makeMiddleEarth();

//////PART 2

//find or create elements
//modify as needed
//append where they belong

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   var $ul = $("<ul>");   ///use the <> to create an element
   var $theShire = $("article").eq(0); //select the first article tag - use eq(0) instead of [0]

   for(var i = 0; i < hobbits.length; i++){
     var $li = $("<li>").text(hobbits[i]).addClass("hobbit");  //not attached yet
     $ul.append($li);   //attached to ul
   }

   $theShire.append($ul);

   // (which is the first article tag on the page)
   // give each hobbit a class of `hobbit`
};

makeHobbits();

/////PART 3

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   var $theRing = $("<div>").attr("id", "the-ring").addClass("magic-imbued-jewelry");

   var $frodo = $('.hobbit').eq(0);

   // add the ring as a child of `Frodo`
   $frodo.append($theRing);

};

keepItSecretKeepItSafe();

/////PART 4

var makeBuddies = function () {

   // create an `aside` tag
   var $buddiesAside = $("<aside>");
   var $buddiesUl = $("<ul>");
   var $rivendell = $("article").eq(1);

   for (var i = 0; i < buddies.length; i++){
     var $buddiesLi = $("<li>").text(hobbits[i]);
     $buddiesUl.append($buddiesLi);
   }

   // attach an `unordered list` of the `'buddies'` in the aside
   $buddiesAside.append($buddiesUl);

   // insert your aside as a child element of `rivendell`
   $rivendell.append($buddiesAside);

};

makeBuddies();

///PART 5

//find or create elements
//modify as needed
//append where they belong

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   
   var $aragorn =
};
