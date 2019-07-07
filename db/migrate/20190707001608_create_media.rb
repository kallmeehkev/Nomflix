class CreateMedia < ActiveRecord::Migration[5.2]
  def change
    create_table :media do |t|
      t.string :title, null: false
      t.integer :duration, null: false
      t.text :description, null: false
      t.string :maturity_rating, null: false, default: "PG"
      t.integer :show_ord
      t.timestamps
    end
  end
end
