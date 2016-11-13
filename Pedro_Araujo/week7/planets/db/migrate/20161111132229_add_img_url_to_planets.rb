class AddImgUrlToPlanets < ActiveRecord::Migration[5.0]
  def change
    add_column :planets, :img_url, :text
  end
end
