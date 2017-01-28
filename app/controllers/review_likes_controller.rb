class ReviewLikesController < ActionController::Base

    before_action :authenticate_user!, only: [:create, :delete]

    def create
        review = Review.find_by_id(params[:review_like][:review_id])
        review = review.review_likes.find_or_create_by(user_id: current_user.id)
        if review.save
            render json: { status: 'ok'}
        else
            render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
      binding.pry
      like = like.find_by_id(params[:like][:id])
            if like.user == current_user
            like.delete
            render json: { status: 'ok'}
            else
            render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
            end
    end



end