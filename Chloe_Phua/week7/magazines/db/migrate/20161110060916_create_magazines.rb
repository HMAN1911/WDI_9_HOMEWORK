class CreateMagazines < ActiveRecord::Migration[5.0]
  def change
    create_table :magazines do |t|
      t.string :title
      t.string :category
      t.integer :frequency
      t.integer :price
      t.text :description

      t.timestamps
    end
  end
end
