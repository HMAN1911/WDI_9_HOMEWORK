class User < ApplicationRecord
  has_secure_password
  has_many :landmarks, dependent::destroy

  validates :email,
    presence: true
  validates :password_digest,
    presence: true

end
