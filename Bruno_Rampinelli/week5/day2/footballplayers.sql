CREATE DATABASE footballplayers

CREATE TABLE players (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR (300),
  image_url TEXT,
  position TEXT,
  nationality TEXT
);

INSERT INTO players (name, image_url, position, nationality) VALUES
('Roberto Baggio', 'http://www.ilciriaco.it/images/Roberto_Baggio_Brescia.jpg', 'number 10', 'Italian');
