CREATE DATABASE programminglanguages;

CREATE TABLE programminglanguages (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  icon_url TEXT,
  description TEXT
);

INSERT INTO programminglanguages (name, icon_url, description)
VALUES ('Sashimi', 'http://www.bbcgoodfood.com/sites/default/files/glossary/sashimi-resized.jpg', 'This language is really tasty.');