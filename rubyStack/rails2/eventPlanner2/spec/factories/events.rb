FactoryBot.define do
  factory :event do
    name { "MyString" }
    date { "2019-12-14" }
    location { "MyString" }
    state { "MyString" }
    user { nil }
  end
end
