class Star < ApplicationRecord
  has_many :planets
  belongs_to :user
end
