CREATE DATABASE barcodemovies;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  Title VARCHAR(200),
  Year VARCHAR(50),
  Rated VARCHAR(50),
  Released VARCHAR(50),
  Runtime VARCHAR(50),
  Genre VARCHAR(200),
  Director TEXT ,
  Writer TEXT ,
  Actors TEXT ,
  Plot TEXT ,
  Language VARCHAR(100),
  Country VARCHAR(100),
  Awards TEXT ,
  Poster TEXT ,
  Metascore VARCHAR(50),
  imdbRating VARCHAR(50),
  imdbVotes VARCHAR(50) ,
  imdbID VARCHAR(50) ,
  Type_ VARCHAR(100) ,
  Response VARCHAR(50)
);
