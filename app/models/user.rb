class User < ApplicationRecord
  has_secure_password

  # model association
  has_many :adposts, dependent: :destroy

  # validations
  validates_presence_of :user_name, :email, :password 
end
