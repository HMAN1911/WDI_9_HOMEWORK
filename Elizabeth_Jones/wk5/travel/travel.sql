CREATE DATABASE travel;

  CREATE TABLE trips (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(400),
    image_url TEXT
  );

  INSERT INTO trips (name, image_url) VALUES ('vietnam', 'http://www.rahlat.com/blog/wp-content/uploads/2015/09/Vietnam-Travel-Photography-002.jpg')
