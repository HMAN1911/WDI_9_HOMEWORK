CREATE DATABASE planetsintheworld;

CREATE TABLE planets (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  image_url TEXT,
  moons INTEGER,
  description TEXT
);

INSERT INTO planets (name, image_url, moons, description) VALUES ('Earth','https://static.pexels.com/photos/2422/sky-earth-galaxy-universe.jpg',1,'Earth is the third planet from the Sun');
