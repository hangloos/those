class ReviewLikesController < ActionController::Base

    before_action :authenticate_user!, only: [:create, :delete]

    def create
        review = Review.find_by_id(params[:review_like][:review_id])
        if like = review.review_likes.find_by(user_id: current_user.id)
            like.delete
            review.save
        else
            review = review.review_likes.create(user_id: current_user.id)
        end

        if review.save
            render json: { status: 'ok'}
        else
            render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
        end
    end


end