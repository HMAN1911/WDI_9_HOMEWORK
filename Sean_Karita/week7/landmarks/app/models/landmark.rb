class Landmark < ApplicationRecord

  belongs_to :user
  validates :name,
    presence: true
  validates :photo_url,
    presence: true

end
