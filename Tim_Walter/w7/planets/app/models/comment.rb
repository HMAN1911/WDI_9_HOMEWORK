class Comment < ApplicationRecord
  default_scope { order("created_at DESC") }

  belongs_to :planet
  belongs_to :user

end
