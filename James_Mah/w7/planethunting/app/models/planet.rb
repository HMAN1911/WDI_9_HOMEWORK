class Planet < ApplicationRecord
  belongs_to :user

  validates :name, 
    presence: true
  validates :photo_url,
    presence: true
  validates :distance_sun,
    presence: true
  validates :volume,
    presence: true
  validates :density,
    presence: true

end
