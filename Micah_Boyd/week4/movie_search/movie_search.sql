
CREATE DATABASE moviesearchbackup;

CREATE TABLE movies (
  title VARCHAR(400),
  imdbID VARCHAR(400),
  year VARCHAR(400),
  rated VARCHAR(400),
  released VARCHAR(400),
  runtime VARCHAR(400),
  genre VARCHAR(400),
  director VARCHAR(400),
  writer VARCHAR(400),
  actors TEXT,
  plot TEXT,
  language VARCHAR(400),
  country VARCHAR(400),
  awards VARCHAR(400),
  imdbRating VARCHAR(400),
  metascore VARCHAR(400),

);

ALTER TABLE movies ADD poster TEXT;
-- ALTER TABLE movies DROP COLUMN poster TEXT;
