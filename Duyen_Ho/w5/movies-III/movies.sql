CREATE DATABASE moviesdb;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(300),
  year VARCHAR(20),
  director TEXT,
  writer TEXT,
  actors TEXT,
  plot TEXT,
  imdb_rating VARCHAR(20),
  run_time VARCHAR(20),
  poster_url TEXT,
  imdb_id VARCHAR(15)
);

CREATE TABLE searches (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(300)
);
