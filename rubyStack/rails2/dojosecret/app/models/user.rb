class User < ApplicationRecord
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :name, :email, :password, :password_confirmation, presence: true
  before_save :downcase_fields

  def downcase_fields
    self.email.downcase!
  end
end
