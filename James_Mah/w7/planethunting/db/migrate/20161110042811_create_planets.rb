class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.text :photo_url
      t.float :distance_sun
      t.float :volume
      t.float :density

      t.timestamps
    end
  end
end
