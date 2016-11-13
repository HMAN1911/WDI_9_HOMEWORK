class AddIdUserToSatellites < ActiveRecord::Migration[5.0]
  def change
    add_column :satellites, :user_id, :integer
  end
end
