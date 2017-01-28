class UserSerializer < ActiveModel::Serializer 
    attributes :id, :email, :username, :admin

    has_many :lists
    has_many :reviews
    has_many :comments
    has_many :likes, through: :comments

end