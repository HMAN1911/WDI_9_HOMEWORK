class AddImgUrlToSatellites < ActiveRecord::Migration[5.0]
  def change
    add_column :satellites, :img_url, :text
  end
end
