CREATE DATABASE movies;

CREATE TABLE titles (
  id SERIAL4 PRIMARY KEY,
  Title VARCHAR(100),
  Year VARCHAR(5),
  Rated VARCHAR(20),
  Released VARCHAR(20),
  Runtime VARCHAR(40),
  Genre VARCHAR(200),
  Director VARCHAR(200),
  Writer VARCHAR(200),
  Actors VARCHAR(200),
  Plot TEXT,
  Language VARCHAR(100),
  Country VARCHAR(100),
  Awards VARCHAR(200),
  Poster VARCHAR(200),
  Metascore VARCHAR(8),
  imdbRating VARCHAR(8),
  imdbVotes VARCHAR(10),
  imdbID VARCHAR(20),
  Type VARCHAR(20),
  Response VARCHAR(10)
);

{"Title"=>"A Practical Guide to a Spectacular Suicide",
 "Year"=>"2014",
 "Rated"=>"N/A",
 "Released"=>"07 Mar 2014",
 "Runtime"=>"85 min",
 "Genre"=>"Comedy, Drama",
 "Director"=>"Graham Hughes",
 "Writer"=>"Keith Grantham, Graham Hughes, Graeme McGeagh",
 "Actors"=>"Mandy Bhari, Ray Crofter, Scott Cunningham, Keith Grantham",
 "Plot"=>
  "A feel-good film about suicide! After many failed attempts at suicide, twenty-something Tom comes to the conclusion that he needs to think outside the box. He plans out the spectacular ...",
 "Language"=>"English",
 "Country"=>"UK",
 "Awards"=>"4 nominations.",
 "Poster"=>
  "http://ia.media-imdb.com/images/M/MV5BOTU5NDk1OTgwMV5BMl5BanBnXkFtZTgwNTg2OTcyNjE@._V1_SX300.jpg",
 "Metascore"=>"N/A",
 "imdbRating"=>"7.2",
 "imdbVotes"=>"30",
 "imdbID"=>"tt3262822",
 "Type"=>"movie",
 "Response"=>"True"}


CREATE TABLE searches (
  id SERIAL4 PRIMARY KEY,
  search_term VARCHAR(100)
);
