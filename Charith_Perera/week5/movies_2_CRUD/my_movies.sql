CREATE DATABASE movies;

CREATE TABLE my_movies(
  id SERIAL PRIMARY KEY,
  title VARCHAR(400),
  year INT,
  review TEXT,
  stars INT,
  image_url TEXT
);
