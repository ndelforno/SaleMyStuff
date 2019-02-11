class NewTableUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :email
      t.string :password_digest
      t.string :phone

      t.timestamps
    end
  end
end
