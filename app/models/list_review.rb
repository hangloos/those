class ListReview < ApplicationRecord
  belongs_to :list
  belongs_to :review
end
