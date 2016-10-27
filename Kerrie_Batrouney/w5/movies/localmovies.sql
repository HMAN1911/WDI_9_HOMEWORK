CREATE DATABASE localmovies;

-- CREATE TABLE searches(
--   id SERIAL4 PRIMARY KEY,
--   keyword_searched_for VARCHAR (400),
--
-- );

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR (400),
  plot TEXT,
  poster TEXT,
  year VARCHAR (50),
  rating VARCHAR (50),
  director VARCHAR (100),
  actors TEXT
);
