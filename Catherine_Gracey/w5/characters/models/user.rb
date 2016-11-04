class User < ActiveRecord::Base
  has_secure_password
  has_many :characters
end

# Test user:
# password: pudding
# email: me@example.com
