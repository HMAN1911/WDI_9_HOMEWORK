CREATE DATABASE movie_finder;

  CREATE TABLE movies (     --has to be plural of the class
    id SERIAL4 PRIMARY KEY,
    title VARCHAR(100),
    director VARCHAR(50),
    year INTEGER,
    plot VARCHAR(400),
    rating VARCHAR(100)
  );
