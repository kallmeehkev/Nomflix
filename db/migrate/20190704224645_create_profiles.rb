class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :maturity_preference, null: false, default: 'R'
      t.timestamps
    end
    add_index :profiles, [:user_id, :name], unique: true
  end
end
