class Artwork < ActiveRecord::Base

  has_many :comments
  belongs_to :artwork_type

end
