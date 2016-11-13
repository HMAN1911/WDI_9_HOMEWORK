class RemoveIdsStarsPlanetsSatellitesFromUserTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :stars_id, :integer
    remove_column :users, :planets_id, :integer
  end
end
