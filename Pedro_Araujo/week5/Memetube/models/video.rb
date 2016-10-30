class Video < ActiveRecord::Base
  validates :title, length: {minimum: 2}

  has_many :comments
  belongs_to :video_genre
  def video_genre_name

  end

end
