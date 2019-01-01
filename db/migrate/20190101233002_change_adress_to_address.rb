class ChangeAdressToAddress < ActiveRecord::Migration[5.2]
  def change
    remove_column :adposts, :adress
    add_column :adposts, :address, :string
  end
end
