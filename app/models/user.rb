class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable
  has_secure_password

  # model association
  has_many :adposts, dependent: :destroy

  # validations
  validates_presence_of :user_name, :email, :password
end
