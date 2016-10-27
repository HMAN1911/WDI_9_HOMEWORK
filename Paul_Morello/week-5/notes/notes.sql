CREATE DATABASE notes;

CREATE TABLE note (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  date INTEGER,
  details TEXT
);

INSERT INTO note (name, date, details) VALUES ('Paul', 251016, 'This is the first note');
