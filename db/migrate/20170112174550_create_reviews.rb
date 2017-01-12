class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :imdb_id
      t.string :viewing_platform
      t.decimal :those_movie_guys_rating
      t.string :those_movie_guys_review
      t.string :actors
      t.string :genres
      t.string :awards
      t.string :box_office
      t.string :director
      t.string :language
      t.string :picture_url
      t.string :production
      t.string :rated
      t.string :year
      t.string :runtime
      t.string :review_type
      t.string :writer
      t.decimal :imdb_rating
      t.integer :imdb_votes
      t.string :tomato_consensus_review
      t.integer :tomato_user
      t.integer :tomato_user_votes
      t.integer :tomato_critics
      t.integer :tomato_critics_votes
      t.string :tomato_url
      t.integer :user_id

      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
