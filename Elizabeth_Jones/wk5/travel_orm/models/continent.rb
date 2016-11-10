class Continent < ActiveRecord::Base
  has_many :trips
end
