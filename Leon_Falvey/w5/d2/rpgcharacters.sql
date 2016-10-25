CREATE DATABASE rpgcharacters;

CREATE TABLE characters (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100),
  race VARCHAR(100),
  class VARCHAR(100),
  fav_hat VARCHAR(100)
);
