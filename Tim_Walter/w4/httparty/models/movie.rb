
# mapping classes to tables
class Movie < ActiveRecord::Base
  # see rails guides validations guide
  validates :name, length: { minimum: 2 }

end
