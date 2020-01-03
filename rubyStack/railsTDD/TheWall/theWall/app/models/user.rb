class User < ApplicationRecord
   has_many :messages
   validates :username, presence: true
   validates :username, uniqueness: true
   validates_length_of :username, minimum: 5, too_short: "No User Created. Username must be greater than 5 characters"
end
