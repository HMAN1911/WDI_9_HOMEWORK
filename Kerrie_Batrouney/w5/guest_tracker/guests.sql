CREATE DATABASE guest_tracker;

\c guest_tracker

CREATE TABLE guests(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR (400),
  phone VARCHAR (50),
  rating INTEGER,
  group_size INTEGER,
  cleanliness INTEGER,
  review_by_me INTEGER,
  review_of_house INTEGER,
  comments TEXT
  );

INSERT INTO guests (name, phone, rating, group_size, cleanliness, review_by_me, review_of_house, comments)
VALUES ('John Lambert', '0409525259', 9, 6, 5, 5, 4, 'older kids, small group');
INSERT INTO guests (name, phone, rating, group_size, cleanliness, review_by_me, review_of_house, comments)
VALUES ('Alberto Petrini', '0405972236', 8, 10, 4, 5, 5, 'none');
