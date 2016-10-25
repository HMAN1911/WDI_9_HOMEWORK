CREATE DATABASE homebrew;

CREATE TABLE recipes (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(200),
  style VARCHAR(200),
  grain_bill TEXT,
  mash_temp INT,
  mash_time INT,
  hop_additions TEXT,
  ferment_temp INT,
  osg REAL,
  fsg REAL,
  abv VARCHAR(5),
  comments TEXT
);

INSERT INTO recipes (name, style, grain_bill, mash_temp, mash_time, hop_additions, ferment_temp, osg, fsg, abv) VALUES ('Brunswick Pale', 'American Pale Ale', 'Maris Otter Pilsner - 1kg, Crystal - 200g', 67, 60, '15g Cascade @ 60min, 15g Cascade @ 30min, 10g Citra @ 0min', 19, 1.023, 1.010, '5.0%');
