
CREATE DATABASE moviesearchbackup;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  imdbid VARCHAR(400),
  year VARCHAR(400),
  rated VARCHAR(400),
  released VARCHAR(400),
  runtime VARCHAR(400),
  genre VARCHAR(400),
  director VARCHAR(400),
  writer VARCHAR(400),
  actors TEXT,
  plot TEXT,
  poster TEXT,
  language VARCHAR(400),
  country VARCHAR(400),
  awards VARCHAR(400),
  imdbrating VARCHAR(400),
  metascore VARCHAR(400)
);

-- ALTER TABLE movies ADD poster TEXT;
-- ALTER TABLE movies DROP COLUMN poster TEXT;
