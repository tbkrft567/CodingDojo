class Event < ApplicationRecord
  belongs_to :user

  
  has_many :attendances, dependent: :destroy
  has_many :users_attendancing, through: :attendances, source: :user

  has_many :comments, dependent: :destroy
  has_many :users_commented, through: :comments, source: :user

end
