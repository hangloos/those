class CreateReviewLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :review_likes do |t|
      t.integer :review_id
      t.integer :user_id

      t.timestamps
    end
  end
end
