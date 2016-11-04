# Movies 3: Return of Son of Movies

A more more advanced version of the Movies Sinatra App

## Summary

The people at OMDB have complained that our site is making too many requests for Jaws. Update your movies app to store OMDB data in your own local database.

The first time a movie is searched for, your app will put results from OMDB as before. But those results will need to be stored locally so that subsequent requests for the same title can be served from YOUR database, without bothering the OMDB guys again.


Use activerecord. Seriously

a single search Hash: (for reference)

=> {"Title"=>"Terminator 2: Judgment Day",
 "Year"=>"1991",
 "Rated"=>"R",
 "Released"=>"03 Jul 1991",
 "Runtime"=>"137 min",
 "Genre"=>"Action, Sci-Fi, Thriller",
 "Director"=>"James Cameron",
 "Writer"=>"James Cameron, William Wisher Jr.",
 "Actors"=>"Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
 "Plot"=>
  "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her young son, John Connor, from a more advanced cyborg, made out of liquid metal.",
 "Language"=>"English, Spanish",
 "Country"=>"USA, France",
 "Awards"=>"Won 4 Oscars. Another 21 wins & 22 nominations.",
 "Poster"=>
  "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM2YjYwYWMtMWZlNi00ZDQxLWExMDctMDAzNzQ0OTkzZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
 "Metascore"=>"75",
 "imdbRating"=>"8.5",
 "imdbVotes"=>"754,399",
 "imdbID"=>"tt0103064",
 "Type"=>"movie",
 "Response"=>"True"}
