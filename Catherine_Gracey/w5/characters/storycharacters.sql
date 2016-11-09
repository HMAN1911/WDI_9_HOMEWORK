CREATE DATABASE storycharacters;

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  username VARCHAR(400),
  email VARCHAR(200),
  password_digest VARCHAR(400)
);

CREATE TABLE characters (
  id SERIAL4 PRIMARY KEY,
  user_id INTEGER,
  name VARCHAR(400),
  gender VARCHAR(30),
  age INTEGER,
  visible BOOLEAN
);

ALTER TABLE characters ADD visible BOOLEAN;

INSERT INTO characters (name, gender, age)
VALUES ('Vladamir the Timid', 'male', '25');
