CREATE DATABASE parrotdb;

CREATE TABLE gifs (
  id SERIAL4 PRIMARY KEY,
  image_url VARCHAR(400),
  caption TEXT
);

INSERT INTO gifs (image_url, caption) VALUES
  ('http://i.imgur.com/Wg2BX6E.gifv', 'Got that swagger'),
  ('http://i.imgur.com/zoTgDB7.gifv', 'Bunny parrot'),
  ('http://i.imgur.com/sfvPq9R.gifv', 'Decaf parrot');
