class AddReviewIdToLikes < ActiveRecord::Migration[5.0]
  def change
    add_column :likes, :review_id, :integer
  end
end
