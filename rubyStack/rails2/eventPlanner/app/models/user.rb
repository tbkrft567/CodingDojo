class User < ApplicationRecord
  has_secure_password
  validates :first_name, :last_name, :email, :location, presence: true 
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  before_save :downcase_fields

  has_many :events

  has_many :comments
  has_many :attendances
  has_many :events_commented, through: :comments, source: :event
  has_many :events_attended, through: :attendances, source: :event

  def downcase_fields
    self.email.downcase!
  end
end
