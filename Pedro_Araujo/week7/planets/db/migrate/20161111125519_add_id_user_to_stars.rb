class AddIdUserToStars < ActiveRecord::Migration[5.0]
  def change
    add_column :stars, :user_id, :integer
  end
end
