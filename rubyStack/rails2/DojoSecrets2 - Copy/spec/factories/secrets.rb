FactoryBot.define do
  factory :secret do
    context { "This is my secret" }
    user nil
  end
end