class Planet < ApplicationRecord
  has_many :satellites
  belongs_to :star
  belongs_to :user
end
