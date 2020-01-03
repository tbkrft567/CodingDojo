class Comment < ApplicationRecord
  validates :comment, presence: true
  validates :comment, length: { minimum: 15 }

  belongs_to :user
  belongs_to :event
end
