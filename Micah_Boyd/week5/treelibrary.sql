
CREATE DATABASE treelibrary;

CREATE TABLE trees (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  image_url TEXT
);

INSERT INTO trees (name, image_url)
VALUES ('Douglas Fir', 'https://s-media-cache-ak0.pinimg.com/564x/42/03/6a/42036a5ca16a746c324fd20f985bdeb3.jpg');
