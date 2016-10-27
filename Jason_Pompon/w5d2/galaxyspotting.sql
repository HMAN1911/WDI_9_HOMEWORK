CREATE DATABASE galaxyspotting;

CREATE TABLE galaxies (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  image_url TEXT,
  description TEXT
);
