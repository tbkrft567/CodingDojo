class User < ApplicationRecord
   EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
   validates_presence_of :first_name, :last_name, :email, presence: true, message: 'required!'
   validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
end
