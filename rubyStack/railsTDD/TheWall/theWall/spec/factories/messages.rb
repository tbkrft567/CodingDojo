FactoryBot.define do
  factory :message do
    message { "My text is greater than 10 characters" }
    user
  end
end
