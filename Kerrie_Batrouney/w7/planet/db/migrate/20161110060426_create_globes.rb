class CreateGlobes < ActiveRecord::Migration[5.0]
  def change
    create_table :globes do |t|
      t.string :name
      t.text :image_url
      t.string :distance

      t.timestamps
    end
  end
end
