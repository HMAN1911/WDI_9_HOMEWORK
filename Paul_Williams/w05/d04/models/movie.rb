require 'httparty'

class Movie < ActiveRecord::Base
  after_initialize do |movie|
    if !movie.title
      info = HTTParty.get "http://omdbapi.com/?i=#{ movie.imdb_id }"
      movie.title = info["Title"]
      movie.year = info["Year"]
      movie.runtime = info["Runtime"]
      movie.genre = info["Genre"]
      movie.director = info["Director"]
      movie.actors = info["Actors"]
      movie.plot = info["Plot"]
      movie.poster = info["Poster"]
      movie.imdb_rating = info["imdbRating"]
    end
  end
end