FactoryBot.define do
  factory :user do
    user_name { Faker::String.random }
    email { Faker::Internet.emailemail }
    password { Faker::String.random }
  end
end
