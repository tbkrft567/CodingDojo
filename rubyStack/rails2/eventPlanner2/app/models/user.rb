class User < ApplicationRecord
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :first_name, :last_name, :location, :state, :email, presence: true
  
  has_many :events
  has_many :comments, dependent: :destroy
  has_many :events_commented, through: :comments, source: :event
  has_many :attendances, dependent: :destroy
  has_many :events_attended, through: :attendances, source: :event
end
