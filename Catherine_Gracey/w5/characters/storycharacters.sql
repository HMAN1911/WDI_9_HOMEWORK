CREATE DATABASE storycharacters;

CREATE TABLE characters (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  gender VARCHAR(30),
  age INTEGER
);

INSERT INTO characters (name, gender, age)
VALUES ('Vladamir the Timid', 'male', '25');
