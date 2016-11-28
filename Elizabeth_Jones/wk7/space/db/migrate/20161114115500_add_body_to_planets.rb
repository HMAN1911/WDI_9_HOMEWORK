class AddBodyToPlanets < ActiveRecord::Migration[5.0]
  def change
    add_column :planets, :body, :text
  end
end
