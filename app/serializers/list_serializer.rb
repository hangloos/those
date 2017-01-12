class ListSerializer < ActiveModel::Serializer 
     attributes :name, :id, :user_id

    has_one :user
    has_many :list_reviews
    has_many :reviews

end