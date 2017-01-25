class CommentSerializer < ActiveModel::Serializer 
    attributes :id, :user_id, :comment, :review_id, :created_at

    has_one :review
    has_one :user
    has_many :likes

    

end