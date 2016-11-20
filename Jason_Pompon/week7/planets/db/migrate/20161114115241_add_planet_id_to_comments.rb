class AddPlanetIdToComments < ActiveRecord::Migration[5.0]
  def change
    add_reference :comments, :planet, foreign_key: true
  end
end
