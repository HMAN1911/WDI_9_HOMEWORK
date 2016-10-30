CREATE DATABASE memetube

CREATE TABLE videos (
id SERIAL4 PRIMARY KEY,
title VARCHAR(100),
description TEXT,
url TEXT,
genre VARCHAR(20)
);

CREATE TABLE video_genres (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  body TEXT,
  dish_id INTEGER
);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(300),
  password_digest VARCHAR(400)
);
