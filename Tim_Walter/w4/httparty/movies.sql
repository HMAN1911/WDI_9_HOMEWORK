 CREATE DATABASE movie_finder;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL,
  year INTEGER,
  poster TEXT,
  duration VARCHAR(400),
  genre VARCHAR(400),
  director VARCHAR(400),
  language VARCHAR(400),
  awards VARCHAR(400),
  metascore VARCHAR(400),
  imdbrating VARCHAR(400),
  imdbvotes VARCHAR(400),
  imdbid VARCHAR(400),
  plot VARCHAR(400),
  writer VARCHAR(400),
  omdb_link TEXT
);


INSERT INTO movies (name, year, poster, duration, genre, director, language, awards, metascore, imdbrating, imdbvotes, imdbid, plot, writer, omdb_link)
VALUES ('Test Movie', 1970, 'poster_url.com', '90mins', 'horror', 'Tim Walter', 'English', 'Best Movie 1970', '1', '9.5', '400000', 'tt0000063', 'Very Thin', 'Tim Walter', 'omdb.com');


-- @title = params[:title]
-- @movie_requested = HTTParty.get("http://www.omdbapi.com/?t=#{@title}")
-- @name = @movie_requested["Title"]
-- @year = @movie_requested["Year"]
-- @poster = @movie_requested["Poster"]
-- @duration = @movie_requested["Runtime"]
-- @genre = @movie_requested["Genre"]
-- @director = @movie_requested["Director"]
-- @language = @movie_requested["Language"]
-- @awards = @movie_requested["Awards"]
-- @metascore = @movie_requested["Metascore"]
-- @imdbRating = @movie_requested["imdbRating"]
-- @imdbVotes = @movie_requested["imdbVotes"]
-- @imdbID = @movie_requested["imdbID"]
-- @plot = @movie_requested["Plot"]
-- @writer = @movie_requested["Writer"]
