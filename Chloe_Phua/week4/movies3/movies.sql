CREATE DATABASE movies;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(50),
  year VARCHAR(10),
  type_ VARCHAR(20),
  actors TEXT,
  awards TEXT,
  country TEXT,
  director VARCHAR(20),
  genre VARCHAR(50),
  episode TEXT,
  season TEXT,
  seriesid TEXT,
  language TEXT,
  metascore VARCHAR(10),
  plot TEXT,
  poster TEXT,
  rated TEXT,
  released VARCHAR(20),
  response VARCHAR(10),
  runtime VARCHAR(20),
  writer VARCHAR(30),
  imdbid VARCHAR(30),
  imdbrating VARCHAR(30),
  imdbvotes VARCHAR(20)
);
