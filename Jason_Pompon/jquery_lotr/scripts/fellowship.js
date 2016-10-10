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
   var newSect = $('<section id ="middle-earth">');
   $( body ).append( newSect );
   // add each land as an `article` tag
   $.each(lands, function(i)
   {
     var article  = $('<article>')
        .appendTo(newSect);
        var h1 = $('<h1>')
        .text(lands[i])
        .appendTo(article);
   })
   // inside each `article` tag include an `h1` with the name of the land

   // append `middle-earth` to your document `body`

};

makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
      var ul = $('<ul>')
      .appendTo('article')
      .first();
      $.each(hobbits, function(i) {
        var hobLi = $('<li>')
        .addClass('hobbit')
        .text(hobbits[i])
        .appendTo(ul);
      });
   // give each hobbit a class of `hobbit`
};

makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   var theRing = $('<div>')
      .attr('id', 'the-ring')
      .addClass('magic-imbued-jewelry')
      .prependTo('ul > .hobbit').first();
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   var aside = $('<aside>')
   .appendTo('article')
   .eq(1);
   $.each(buddies, function(i) {
     var ul = $('<ul>')
     .text(buddies[i])
     .appendTo(aside);
   });
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};

makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
  $('aside')
  .find('ul')
  .eq(3)
  .text('Aragorn');
};

beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('.hobbit')
   .appendTo('article')
   .find('article')
   .eq(1);
};

leaveTheShire();
