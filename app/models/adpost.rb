class Adpost < ApplicationRecord
  has_one_attached :image

  # model association
  belongs_to :user
  belongs_to :category

  # validations
  validates_presence_of :title, :price

  def image_url
    Rails.application.routes.url_helpers.rails_blob_path(self.image, disposition: "image", only_path: true)
  end

end
