CREATE DATABASE footballplayers

CREATE TABLE players (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR (300),
  image_url TEXT,
  position TEXT,
  nationality TEXT
);

INSERT INTO players (name, image_url, position, nationality) VALUES
('Roberto Baggio', 'http://www.ilciriaco.it/images/Roberto_Baggio_Brescia.jpg', 'number 10', 'Italian');

INSERT INTO players (name, image_url, position, nationality) VALUES
('Andrea Pirlo', 'http://golcalcio.it/pirlobr1.jpg', 'midfielder', 'Italian');

INSERT INTO players (name, image_url, position, nationality) VALUES
('Matteo Sereni', 'http://nst.sky.it/immagini/sport/calcio_italiano/2015/06/30/original/matteo_sereni_getty.jpg', 'goalkeeper', 'Italian');

INSERT INTO players (name, image_url, position, nationality) VALUES
('Gilberto Martinez', 'http://www.tuttocalciatori.net/fotocalciatori/Gilberto%20Martinez%20Vidal.jpg', 'Right Back', 'Costa Rica');

CREATE TABLE player_positions(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

ALTER TABLE players ADD player_position_id INTEGER;

INSERT INTO player_positions (name) VALUES ('goalkeeper');
INSERT INTO player_positions (name) VALUES ('number 10');
INSERT INTO player_positions (name) VALUES ('midfielder');
INSERT INTO player_positions (name) VALUES ('striker');
INSERT INTO player_positions (name) VALUES ('defender');

CREATE TABLE teams (  id SERIAL4 PRIMARY KEY,
  name TEXT,
  team_id INTEGER
);

INSERT INTO teams (name) VALUES ('Brescia');
INSERT INTO player_positions (name) VALUES ('Milan');
