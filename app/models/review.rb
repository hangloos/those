class Review < ApplicationRecord

  has_many :comments
  belongs_to :user
  has_and_belongs_to_many :lists
  has_many :review_likes
end
