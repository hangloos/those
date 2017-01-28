class ReviewSerializer < ActiveModel::Serializer 
  
   attributes :id,:awards, :actors, :review_likes, :genres, :box_office, :director, :language, :picture_url, :production, :rated, :year, :runtime, :title, :review_type, :imdb_id, :viewing_platform, :those_movie_guys_rating, :those_movie_guys_review, :writer, :imdb_rating, :imdb_votes, :tomato_consensus_review, :tomato_user, :tomato_user_votes,  :tomato_critics, :tomato_critics_votes, :tomato_url, :created_at, :updated_at, :user_id

   has_many :comments
   has_one :user
   has_many :review_likes
   



end