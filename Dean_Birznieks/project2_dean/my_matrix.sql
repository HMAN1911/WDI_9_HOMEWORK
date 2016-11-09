CREATE DATABASE my_matrix;

CREATE TABLE diagrams (
  id SERIAL4 PRIMARY KEY,
  user_id INTEGER,
  username VARCHAR(50),
  diagram_type VARCHAR(25),
  diagram_name  VARCHAR(50),
  diagram_oview_title VARCHAR(50),
  diagram_oview_text VARCHAR(500),
  axis_label_bottom VARCHAR(50),
  axis_label_left VARCHAR(50),
  q1_label_side VARCHAR(25),
  q1_label_corner VARCHAR(25),
  q1_content VARCHAR(200),
  q2_label_side VARCHAR(25),
  q2_content VARCHAR(200),
  q3_label_side VARCHAR(25),
  q3_label_bottom VARCHAR(25),
  q3_label_corner VARCHAR(25),
  q3_content VARCHAR(200),
  q4_label_bottom VARCHAR(25),
  q4_label_corner VARCHAR(25),
  q4_content VARCHAR(200)
);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  username VARCHAR(100),
  password_digest VARCHAR(400)
);


-- INSERT INTO dishes (name, image_url)
-- VALUES ('rips', 'http://resources3.news.com.au/images/2014/03/06/1226846/697575-0c133ed8-a369-11e3-9d32-3d2093abcd90.jpg');

-- CREATE TABLEsasd comments (
--   id SERIAL4 PRIMARY KEY,
--   body TEXT,
--   dish_id INTEGER
-- );

-- ALTER TABLE dishes ADD dish_type VARCHAR(100);
--
-- CREATE TABLE dish_types (
--   id SERIAL4 PRIMARY KEY,
--   name VARCHAR(100) NOT NULL
-- );
--
-- ALTER TABLE dishes ADD dish_type_id INTEGER;
--
-- ALTER TABLE dishes DROP COLUMN dish_type;

-- CREATE TABLE users (
--   id SERIAL4 PRIMARY KEY,
--   email VARCHAR(300),
--   password_digest VARCHAR(400)
-- );
