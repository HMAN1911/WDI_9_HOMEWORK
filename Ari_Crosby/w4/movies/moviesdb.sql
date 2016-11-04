CREATE DATABASE moviesdb;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  year INTEGER,
  image_url TEXT,
  plot VARCHAR(1000)
  runtime VARCHAR(20)
  actors VARCHAR(400)
);

INSERT INTO movies (title, year, image_url)
VALUES ('title', year, 'image_url');
