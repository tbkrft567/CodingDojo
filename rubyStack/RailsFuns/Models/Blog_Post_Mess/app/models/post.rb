class Post < ApplicationRecord
  belongs_to :Blog
  has_many :Messages, dependent: :destroy
  validates :Title, :Content, presence: true
  validates :Title, length: { minimum: 7 }
end
