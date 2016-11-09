CREATE DATABASE movie3;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  poster TEXT,
  year INTEGER,
  rated INTEGER,
  released INTEGER,
  runtime INTEGER,
  genre VARCHAR(400),
  imdbID INTEGER,
  director VARCHAR(400),
  writer VARCHAR(400),
  actors VARCHAR(400),
  plot VARCHAR(400),
  language VARCHAR(400),
  country VARCHAR(400),
  awards TEXT,
  metascore INTEGER,
  type VARCHAR(400)
);
