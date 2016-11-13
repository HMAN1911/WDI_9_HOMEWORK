class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.integer :star_id
      t.string :ring
      t.text :description
      t.timestamps
    end
  end
end
