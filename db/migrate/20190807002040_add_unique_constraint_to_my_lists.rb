class AddUniqueConstraintToMyLists < ActiveRecord::Migration[5.2]
  def change
    add_index :my_lists, [:profile_id, :media_id], unique: true
  end
end
