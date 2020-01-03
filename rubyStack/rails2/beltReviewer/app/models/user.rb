class User < ApplicationRecord
  has_secure_password
  
  has_many :events

  has_many :attendances, dependent: :destroy
  has_many :events_attending, through: :attendances, source: :event

  has_many :comments, dependent: :destroy
  has_many :events_commented_to, through: :comments, source: :event
end
