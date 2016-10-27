CREATE DATABASE search_film;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  year INTEGER,
  released_year INTEGER,
  genre TEXT,
  director TEXT,
  plot TEXT,
  poster TEXT,
  rating INTEGER,
  actors TEXT
);

DELETE FROM movies
WHERE title='Brooklyn nine nine';
