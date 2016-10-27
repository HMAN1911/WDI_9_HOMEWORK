CREATE DATABASE movies;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  year INT,
  runtime INT,
  genre VARCHAR(200),
  director VARCHAR(200),
  actors TEXT,
  plot TEXT,
  poster VARCHAR(200),
  imdb_rating REAL
  imdb_id VARCHAR(20)
);
