class AddActorsToMovies < ActiveRecord::Migration[5.0]
  def change
    add_column :movies, :actors, :text
  end
end
