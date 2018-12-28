class CreateAdposts < ActiveRecord::Migration[5.2]
  def change
    create_table :adposts do |t|
      t.string :title
      t.string :description
      t.integer :price
      t.string :adress
      t.integer :user_id

      t.timestamps
    end
  end
end
