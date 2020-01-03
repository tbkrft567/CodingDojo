class Event < ApplicationRecord
  belongs_to :user
  has_many :attendances
  has_many :users_RSVPd, through: :attedances, source: :user
  has_many :comments
  has_many :users_commented, through: :comments, source: :user

end
