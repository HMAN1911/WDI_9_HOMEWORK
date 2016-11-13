class Planet < ApplicationRecord
  has_many :comments, dependent: :destroy
end
