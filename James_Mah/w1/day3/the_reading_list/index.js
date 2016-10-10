var books = [];
var theHobbit = { title: 'The Hobbit',
                  author: 'J.R.R. Tolkien',
                  alreadyRead: false
                };
var thePigs = { title: 'The Pigs',
                author: 'Mary Jane',
                alreadyRead: true
              };

books.push(theHobbit, thePigs);

for (var i = 0; i < books.length; i++) {
  console.log(books[i].title + ' by ' + books[i].author + '.');
  if (books[i].alreadyRead) {
    console.log('You already read the "' + books[i].title + '" by ' + books[i].author + '.');
  }
  else {
   console.log('You still need to read "' + books[i].title + ' by ' + books[i].author + '.'); 
  }
}