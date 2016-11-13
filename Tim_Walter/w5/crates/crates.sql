CREATE DATABASE crates;

CREATE TABLE records (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  artist VARCHAR(400),
  image_url TEXT

);


INSERT INTO records (title, artist, image_url)
VALUES ('Robo Tokyo EP', 'Tim Panalley', 'http://images.junostatic.com/full/CS2775872-02A-BIG.jpg');



SELECT * from records;
