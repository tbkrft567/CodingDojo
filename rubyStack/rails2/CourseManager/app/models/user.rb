class User < ApplicationRecord
  has_secure_password
  validates :name, :email, presence: true

  has_many :signups
  has_many :courses_registed, through: :signups, source: :course
end
