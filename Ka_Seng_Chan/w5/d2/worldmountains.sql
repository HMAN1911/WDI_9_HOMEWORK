CREATE DATABASE worldmountains;

CREATE TABLE mountains (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(300),
  image_url TEXT
);

INSERT INTO mountains (name, image_url) VALUES ('Mount Kinabalu', 'http://sabahguide.com/wp-content/uploads/2016/06/mount-kinabalu.jpg');
