CREATE DATABASE favcars;

CREATE TABLE cars (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  img_url TEXT
);

INSERT INTO cars (name, img_url) VALUES ('Lambo', 'http://www.topgear.com/sites/default/files/styles/fit_1960x1102/public/news/carousel/2015/04/Large%20Image_10190.jpg?itok=Lgxsgsdk');
