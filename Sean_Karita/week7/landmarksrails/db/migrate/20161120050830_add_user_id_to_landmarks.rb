class AddUserIdToLandmarks < ActiveRecord::Migration[5.0]
  def change
    add_reference :landmarks, :user, foreign_key: true
  end
end
