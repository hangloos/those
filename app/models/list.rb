class List < ApplicationRecord

  belongs_to :user
  has_many :list_reviews
  has_many :reviews, through: :list_reviews
end
