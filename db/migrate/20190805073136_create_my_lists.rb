class CreateMyLists < ActiveRecord::Migration[5.2]
  def change
    create_table :my_lists do |t|
      t.integer :profile_id, null: false
      t.integer :media_id, null: false
      t.timestamps
    end
  end
end
