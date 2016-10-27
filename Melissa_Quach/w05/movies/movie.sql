CREATE DATABASE 'omdb';

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  released DATE,
  genre VARCHAR(255),
  runtime VARCHAR(50),
  rating VARCHAR(5),
  director TEXT,
  writer TEXT,
  actor TEXT,
  plot TEXT,
  awards VARCHAR(255),
  poster VARCHAR(255),
  metascore DECIMAL,
  imdb_rating DECIMAL
);
