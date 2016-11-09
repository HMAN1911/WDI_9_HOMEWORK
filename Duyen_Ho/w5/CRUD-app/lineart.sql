CREATE DATABASE lineart;

CREATE TABLE artworks (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  artist VARCHAR(400),
  image_url TEXT
);

CREATE TABLE artwork_types (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  artwork_id INTEGER,
  user_id INTEGER,
  body TEXT
);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(300),
  username VARCHAR(100) NOT NULL,
  password_digest VARCHAR(400)
);
