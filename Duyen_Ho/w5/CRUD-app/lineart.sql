CREATE DATABASE lineart;

CREATE TABLE artworks (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  artist VARCHAR(400),
  image_url TEXT
);

INSERT INTO artworks (title, artist, image_url)
VALUES ('Kiss 2015', 'Quibe', 'http://i.imgur.com/yfwldZD.jpg');

INSERT INTO artworks (title, artist, image_url)
VALUES ('Unknown', 'EMBA', 'http://i.imgur.com/H7MqK0Q.jpg');

INSERT INTO artworks (title, artist, image_url)
VALUES ('Close', 'Quibe', 'https://s-media-cache-ak0.pinimg.com/564x/2a/09/8e/2a098e78c73ea8707158f61e46501afb.jpg');

INSERT INTO artworks (title, artist, image_url)
VALUES ('Unknown', 'EMBA', 'https://s-media-cache-ak0.pinimg.com/236x/6e/eb/c7/6eebc7c9608096708511af89cb21d82e.jpg');
--
INSERT INTO artworks (title, artist, image_url)
VALUES ('Unknown', 'EMBA', 'http://i.imgur.com/Q0xQsFJ.jpg');

INSERT INTO artworks (title, artist, image_url)
VALUES ('Unknown', 'Unknown', 'https://s-media-cache-ak0.pinimg.com/736x/60/cb/45/60cb4505661ac5d39b3641513c843356.jpg');

INSERT INTO artworks (title, artist, image_url)
VALUES ('Unknown', 'EMBA', 'https://scontent.cdninstagram.com/t51.2885-15/e35/13562070_602420816603634_122915127_n.jpg?ig_cache_key=MTI4Mjg2MzkwOTUxODU1ODAzNw%3D%3D.2');

INSERT INTO artworks (title, artist, image_url)
VALUES ('TBA', 'Quibe', 'https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e15/11325452_852288128192307_803443676_n.jpg');
--
INSERT INTO artworks (title, artist, image_url)
VALUES ('Unknown', 'Minimal Tattoos', 'https://41dcdfcd4dea0e5aba20-931851ca4d0d7cdafe33022cf8264a37.ssl.cf1.rackcdn.com/9673664_these-minimal-tattoos-are-all-made-from_tf60049d8.jpg');

INSERT INTO artworks (title, artist, image_url)
VALUES ('TBA', 'TBA', 'http://66.media.tumblr.com/f03c3ce34cb9367877989b7c789b0dc2/tumblr_oafax0ylhr1uto4s4o1_500.jpg');

INSERT INTO artworks (title, artist, image_url)
VALUES ('TBA', 'Mara Den', 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12144147_1701944403356451_1212904108_n.jpg?ig_cache_key=MTIxMTExNDM1MTM3NDc1MDA5Nw%3D%3D.2');

INSERT INTO artworks (title, artist, image_url)
VALUES ('TBA', 'Mara Den', 'https://scontent.cdninstagram.com/t51.2885-15/e35/14073004_1837105963189519_203961524_n.jpg?ig_cache_key=MTMyMTM2OTEyNDIwNjkyODQxNA%3D%3D.2');

-- Content: Mara Den
--

INSERT INTO artworks (title, artist, image_url)
VALUES ('TBA', 'Mara Den', 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12725163_1520825338223097_2100941909_n.jpg?ig_cache_key=MTE5NTI0MjE4NDkwOTExNTY1Ng%3D%3D.2');

INSERT INTO artworks (title, artist, image_url)
VALUES ('TBA', 'Mara Den', 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12534127_326777587446054_1920151465_n.jpg');


 INSERT INTO artworks (title, artist, image_url)
 VALUES ('TBA', 'Mara Den', ' https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10598238_1005152052893564_644319611_n.jpg?ig_cache_key=MTIxMTk1NDkyNTAyNzg0MDUwOA%3D%3D.2');

 INSERT INTO artworks (title, artist, image_url)
 VALUES ('TBA', 'Mara Den', 'http://67.media.tumblr.com/476de1790707494c4e1d3252736292be/tumblr_nqr47shcH41upg639o1_1280.jpg');


-- \c goodfoodhunting
-- \dt shows database
