class ReviewLikeSerializer < ActiveModel::Serializer 
    attributes :id, :review_id, :user_id

    has_one :review
    has_one :user

    

end