CREATE DATABASE movie_list;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(100),
  year VARCHAR(10),
  rated VARCHAR(20),
  poster_url TEXT,
  runtime VARCHAR(50),
  genre VARCHAR(100),
  writer VARCHAR(100),
  actors TEXT,
  plot TEXT,
  country VARCHAR(100),
  awards TEXT,
  imdb_rating VARCHAR(50),
  metascore VARCHAR(50)
);
