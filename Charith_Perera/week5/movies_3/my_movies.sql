CREATE DATABASE movies;

CREATE TABLE my_movies(
  id SERIAL PRIMARY KEY,
  title VARCHAR(400),
  year INT,
  review TEXT,
  stars INT,
  image_url TEXT
);


CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  title VARCHAR(400),
  year INT,
  review TEXT,
  stars INT,
  image_url TEXT
);

CREATE TABLE searches(
  id SERIAL PRIMARY KEY,
  term TEXT
)

CREATE TABLE movie_caches (
  id SERIAL PRIMARY KEY,
  title VARCHAR(400),
  year INT,
  rated VARCHAR(5),
  released VARCHAR(100),
  runtime VARCHAR(100),
  genre VARCHAR(100),
  director TEXT,
  writer TEXT,
  actors TEXT,
  plot TEXT,
  awards TEXT,
  poster TEXT,
  imdbrating VARCHAR(100)
);

INSERT INTO movie_caches (title, year) VALUES ('Jaws', 1975);
