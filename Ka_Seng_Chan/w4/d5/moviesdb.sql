CREATE DATABASE moviesdb;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  year VARCHAR(10),
  rated VARCHAR(50),
  released VARCHAR(50),
  runtime VARCHAR(50),
  genre VARCHAR(200),
  director VARCHAR(200),
  writer VARCHAR(200),
  actors VARCHAR(400),
  plot TEXT,
  language VARCHAR(200),
  country VARCHAR(100),
  awards VARCHAR(400),
  poster_url TEXT,
  metascore INTEGER,
  imdb_rating VARCHAR(50),
  imdb_votes VARCHAR(50),
  imdb_id VARCHAR(100)
);
