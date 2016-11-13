class User < ApplicationRecord
  has_secure_password
  has_many :stars
  has_many :planets
  has_many :satellites
  # VALIDATION

end
