class Adpost < ApplicationRecord
  has_one_attached :image

  # model association
  belongs_to :user
  belongs_to :category

  # validations
  validates_presence_of :title, :price

end
