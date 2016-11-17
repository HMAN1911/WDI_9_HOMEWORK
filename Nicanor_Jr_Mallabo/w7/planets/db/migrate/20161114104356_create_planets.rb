class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.text :image_url
      t.text :description
      t.text :location

      t.timestamps
    end
  end
end
