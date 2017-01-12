class ListReviewSerializer < ActiveModel::Serializer 
    attributes :id, :review_id, :list_id

     has_one :review
     has_one :list

    

end