class Event < ApplicationRecord
  validates :name, :location, :date, presence: true
  
  belongs_to :user

  has_many :attendances, dependent: :destroy
  has_many :users_attending, through: :attendances, source: :user 

  has_many :comments, dependent: :destroy
  has_many :users_commented, through: :comments, source: :user

end
