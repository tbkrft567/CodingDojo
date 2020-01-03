class User < ApplicationRecord
   validates :first_name, :last_name, :email_address, :age, presence: true
   validates :first_name, :last_name, length: { minimum: 2 }
   validates :age, numericality: {integer_only: true}, :inclusion => 10..150
end
