class Owner < ApplicationRecord
  belongs_to :User
  belongs_to :Blog
end
