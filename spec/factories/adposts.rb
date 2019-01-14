FactoryBot.define do
  factory :adpost do
    title { Faker::Appliance.equipment }
    price { Faker::Number.number(5) }

  end
end
