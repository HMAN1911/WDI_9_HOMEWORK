class Player < ActiveRecord::Base

  belongs_to :player_position
  belongs_to :team

end
