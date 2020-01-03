class Message < ApplicationRecord
  belongs_to :User
  belongs_to :Post
  validates :author, :message, presence: true
  validates :message, length: { minimum: 7 }
end
