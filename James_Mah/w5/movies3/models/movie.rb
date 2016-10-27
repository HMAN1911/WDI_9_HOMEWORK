class Movie < ActiveRecord::Base
  validates :imdbid, length: { minimum: 2 };
  validates :title, length: { minimum: 2 };
end