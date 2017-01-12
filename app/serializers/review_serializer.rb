class ReviewSerializer < ActiveModel::Serializer 
  
   attributes :id, :awards, :actors, :genres, :box_office, :director, :language, :picture_url, :production, :rated, :year, :runtime, :title, :review_type, :imdb_id, :viewing_platform, :those_movie_guys_rating, :those_movie_guys_review, :writer, :imdb_rating, :imdb_votes, :tomato_consensus_review, :tomato_user, :tomato_user_votes,  :tomato_critics, :tomato_critics_votes, :tomato_url, :created_at, :updated_at, :user_id

   has_many :comments
   has_many :likes, through: :comments
   has_one :user
   



end