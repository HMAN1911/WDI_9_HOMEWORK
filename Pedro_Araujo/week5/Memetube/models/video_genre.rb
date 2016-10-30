class VideoGenre < ActiveRecord::Base
  has_many :videos
end
