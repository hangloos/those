class Comment < ApplicationRecord
  has_many :likes
  belongs_to :user
  belongs_to :review
end
