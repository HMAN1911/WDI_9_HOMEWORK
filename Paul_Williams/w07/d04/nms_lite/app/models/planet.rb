class Planet < ApplicationRecord
  belongs_to :user
  has_many :moons
end
