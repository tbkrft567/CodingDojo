class Message < ApplicationRecord
  belongs_to :Post
  validates :Author, :Message, presence: true 
  validates :Message, length: { minimum: 15 }
end
