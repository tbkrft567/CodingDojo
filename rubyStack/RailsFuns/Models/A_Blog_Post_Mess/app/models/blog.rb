class Blog < ApplicationRecord
   has_many :Posts
   has_many :Owners
   has_many :Users, through: :Owners
   has_many :Users, through: :Posts
   validates :name, :description, presence: true
   validates :description, length: { minimum: 7 }
end
