class Blog < ApplicationRecord
   has_many :Posts
   validates :Name, :Description, presence: true
end
