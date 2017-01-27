class LikeSerializer < ActiveModel::Serializer 
    attributes :id, :comment_id, :review_id

    has_one :comment
    has_one :user

    

end