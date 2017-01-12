class Review < ApplicationRecord

  has_many :comments
  has_many :likes, through: :comments
  belongs_to :user
  has_and_belongs_to_many :lists
end
