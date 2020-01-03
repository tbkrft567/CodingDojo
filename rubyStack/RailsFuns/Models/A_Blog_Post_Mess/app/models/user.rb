class User < ApplicationRecord
   has_many :Messages
   has_many :Posts
   has_many :Owners
   has_many :Blogs, through: :Owners
   has_many :Blogs, through: :Posts
   validates :first_name, :last_name, :email_address, presence: true
end
