CREATE DATABASE travel;

  CREATE TABLE trips (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(400),
    image_url TEXT
  );

  INSERT INTO trips (name, image_url) VALUES ('vietnam', 'http://www.rahlat.com/blog/wp-content/uploads/2015/09/Vietnam-Travel-Photography-002.jpg')


---COMMENTS TABLE

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  body TEXT,
  trip_id INTEGER
);


  INSERT INTO comments (body, trip_id) VALUES ('great work!', 1);

-- trip_id matches the id of the trips table


---USERS TABLE

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(300),
  password_digest VARCHAR(400)
);

---CONTINENTS TABLE

CREATE TABLE continents (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO continents (name) VALUES ('Africa');
INSERT INTO continents (name) VALUES ('Asia');
INSERT INTO continents (name) VALUES ('Antartica');
INSERT INTO continents (name) VALUES ('Australia');
INSERT INTO continents (name) VALUES ('Europe');
INSERT INTO continents (name) VALUES ('North America');
INSERT INTO continents (name) VALUES ('South America');

-- to connect continent id to trips #remember to restart server after this
ALTER TABLE trips ADD continent_id INTEGER;
