class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.text :title
      t.text :description
      t.text :image_url

      t.timestamps
    end
  end
end
