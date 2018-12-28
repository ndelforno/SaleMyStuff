class CatIdToAdpost < ActiveRecord::Migration[5.2]
  def change
    add_column :adposts, :category_id, :integer
  end
end
