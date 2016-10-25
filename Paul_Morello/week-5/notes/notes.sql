CREATE DATABASE notes;

CREATE TABLE note (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  date INTEGER,
  image_url TEXT
);
