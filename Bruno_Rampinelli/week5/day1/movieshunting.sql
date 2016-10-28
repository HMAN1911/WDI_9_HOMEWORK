CREATE DATABASE movieshunting;

CREATE TABLE searches (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  year INTEGER,
  runtime INTEGER,
  genre TEXT,
  director TEXT,
  actors TEXT,
  image TEXT
);
