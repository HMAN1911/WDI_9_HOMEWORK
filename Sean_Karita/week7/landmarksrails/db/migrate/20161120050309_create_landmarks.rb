class CreateLandmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :landmarks do |t|
      t.string :name
      t.text :photo_url
      t.string :country
      t.string :city
      t.text :description

      t.timestamps
    end
  end
end
