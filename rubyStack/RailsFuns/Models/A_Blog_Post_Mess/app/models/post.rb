class Post < ApplicationRecord
  belongs_to :User
  belongs_to :Blog
  has_many :Messages
  validates :title, :content, presence: true
  validates :content, length: {minimum: 7}
end
