class Course < ApplicationRecord
   validates :name, :instructor, :capacity, presence: true
   validates :capacity, numericality: { greater_than: 1 }
   
   has_many :signups
   has_many :users_registed, through: :signups, source: :user
end
