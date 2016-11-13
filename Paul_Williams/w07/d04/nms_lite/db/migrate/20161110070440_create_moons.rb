class CreateMoons < ActiveRecord::Migration[5.0]
  def change
    create_table :moons do |t|
      t.string :name
      t.references :user, foreign_key: true
      t.references :planet, foreign_key: true
      t.integer :radius

      t.timestamps
    end
  end
end
