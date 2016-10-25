CREATE DATABASE parrotdb;

CREATE TABLE posts (
  id SERIAL4 PRIMARY KEY,
  image_url VARCHAR(400),
  caption TEXT
);

INSERT INTO posts (image_url, caption) VALUES
  ('http://i.imgur.com/Wg2BX6E.gif', 'Got that swagger'),
  ('http://i.imgur.com/zoTgDB7.gif', 'Bunny parrot'),
  ('http://i.imgur.com/sfvPq9R.gif', 'Decaf parrot');
