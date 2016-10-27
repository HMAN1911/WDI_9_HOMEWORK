CREATE DATABASE goodsightseeing;
-- \c goodsightseeing

CREATE TABLE landmarks (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  image_url TEXT
);

-- \dt
-- \d landmarks

INSERT INTO landmarks (name, image_url)
VALUES ('Statue of Liberty', 'https://pbs.twimg.com/media/CdCLAAsWoAEEP16.jpg');
