class List < ApplicationRecord

  belongs_to :user
  has_many :list_reviews
  has_many :reviews, through: :list_reviews
  #has_and_belongs_to_many :reviews
end
