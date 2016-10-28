class Movie < ActiveRecord::Base
  def new_record?
    !self.title
  end

  def update_info
    info = HTTParty.get "http://omdbapi.com/?i=#{ self.imdb_id }"
    self.title = info["Title"]
    self.year = info["Year"]
    self.runtime = info["Runtime"]
    self.genre = info["Genre"]
    self.director = info["Director"]
    self.actors = info["Actors"]
    self.plot = info["Plot"]
    self.poster = info["Poster"]
    self.imdb_rating = info["imdbRating"]
    self.save
  end
end
