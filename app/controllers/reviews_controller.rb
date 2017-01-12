class ReviewsController < ActionController::Base

    before_action :authenticate_user!, only: [:create, :update, :destroy]

    def index
        reviews = Review.all
        render json: reviews
    end


end