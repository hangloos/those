class CreateListReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :list_reviews do |t|
      t.integer :list_id
      t.integer :review_id

      t.timestamps
    end
  end
end
