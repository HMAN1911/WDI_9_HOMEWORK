class Planet < ApplicationRecord
  has_many :likes, dependent: :destroy
  belongs_to :user
end
